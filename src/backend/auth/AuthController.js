import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import DbConnector from '../db/DbConnector.js';
import config from '../config.js';

function generateToken(id) {
  const payload = {
    id,
  };
  return jwt.sign(payload, config.secret, {
    expiresIn: '24h',
  });
}

export default class AuthController {
  static async reg(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ message: 'Registration error', errors });
        return;
      }

      let { name, password } = req.body;
      const connect = DbConnector.open();

      const fieldName = req.body.fakeField ?? 'name';

      const sql = `SELECT * FROM users WHERE ${fieldName} = ${connect.escape(name)}`;
      const foundUser = await connect.awaitQuery(sql);
      if (foundUser.length) {
        res.status(200).json(['user exists']);
        DbConnector.close(connect);
        return;
      }

      password = bcrypt.hashSync(password, 10);
      const newUser = await connect.awaitQuery('INSERT INTO users SET ?', { name, password });
      res.status(200).json(newUser.insertId);
      DbConnector.close(connect);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  static async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ message: 'Login error', errors });
      }

      const connect = DbConnector.open();
      const { name, password } = req.body;

      const sql = `SELECT * FROM users WHERE name = ${connect.escape(name)}`;
      const foundUser = await connect.awaitQuery(sql);
      if (!foundUser.length) {
        res.status(200).json(['incorrect data']);
        DbConnector.close(connect);
        return;
      }
      const user = foundUser[0];
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(200).json(['incorrect data']);
        DbConnector.close(connect);
        return;
      }

      const token = generateToken(user.id);
      res.status(200).json(token);
      DbConnector.close(connect);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  static async getUsers(req, res) {
    try {
      const connect = DbConnector.open();
      connect.query('SELECT id, name FROM users', (error, results) => {
        if (error) {
          res.json(error);
        }
        res.json(results);
        DbConnector.close(connect);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
