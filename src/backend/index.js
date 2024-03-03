#!/usr/bin/env node
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRouter from './auth/authRouter';
import authMiddleware from './middleware/authMiddleware';

const PORT = 80;
const app = express();

const BUILD_PATH = `${path.resolve()}/dist`;
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);

// todo: вынести руты
app.use(express.static(`${path.resolve()}/node_modules/bootstrap/dist/css`));

app.get('/', authMiddleware, (req, res) => {
  app.use('/main', express.static(`${BUILD_PATH}/main`));
  res.sendFile(path.resolve(BUILD_PATH, 'main', 'index.html'));
});

app.get('/calculator', authMiddleware, (req, res) => {
  app.use('/calculator', express.static(`${BUILD_PATH}/calculator`));
  res.sendFile(path.resolve(BUILD_PATH, 'calculator', 'index.html'));
});

app.get('/password_generator_system', authMiddleware, (req, res) => {
  app.use('/password_generator_system', express.static(`${BUILD_PATH}/password_generator_system`));
  res.sendFile(path.resolve(BUILD_PATH, 'password_generator_system', 'index.html'));
});

app.get('/todo_app', authMiddleware, (req, res) => {
  app.use('/todo_app', express.static(`${BUILD_PATH}/todo_app`));
  app.use(express.static(BUILD_PATH));
  res.sendFile(path.resolve(BUILD_PATH, 'todo_app', 'index.html'));
});

app.get('/reg', (req, res) => {
  res.set({
    auth: 'none',
  });
  app.use('/auth', express.static(`${BUILD_PATH}/auth`));
  res.sendFile(path.resolve(BUILD_PATH, 'reg', 'index.html'));
});

app.get('/login', (req, res) => {
  res.set({
    auth: 'none',
  });
  app.use('/auth', express.static(`${BUILD_PATH}/auth`));
  res.sendFile(path.resolve(BUILD_PATH, 'login', 'index.html'));
});

const start = async () => {
  try {
    app.listen(PORT);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

start();
