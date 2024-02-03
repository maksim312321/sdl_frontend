#!/usr/bin/env node
import express from 'express';
import path from 'path';
import mysql from 'mysql';
import authRouter from './auth/authRouter.js';
import authMiddleware from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';

const PORT = 80;
const app = express();

const FRONTEND_PATH = path.resolve() + '/src/frontend';
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);

// todo: вынести руты
app.use(express.static(path.resolve() + '/node_modules/bootstrap/dist/css'));

app.get('/', authMiddleware, (req, res) => {
    app.use(express.static(FRONTEND_PATH));
    res.sendFile(path.resolve(FRONTEND_PATH, 'index.html'));
});

app.get('/contact_manager_app', authMiddleware, (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/calculator'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'calculator', 'index.html'));
});

app.get('/password_generator_system', authMiddleware, (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/password_generator_system'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'password_generator_system', 'index.html'));
});

app.get('/todo_app', authMiddleware, (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/todo_app'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'todo_app', 'index.html'));
});

app.get('/reg', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/auth'));
    res.sendFile(path.resolve(FRONTEND_PATH + '/auth', 'reg', 'index.html'));
});

app.get('/login', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/auth'));
    res.sendFile(path.resolve(FRONTEND_PATH + '/auth', 'login', 'index.html'));
});

const start = async () => {
    try {
        app.listen(PORT);
    } catch (e) {
        console.log(e);
    }
};

start();