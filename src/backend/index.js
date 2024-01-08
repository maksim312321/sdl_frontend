import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

const FRONTEND_PATH = path.resolve() + '\\src\\frontend';

app.get('/', (req, res) => {
    app.use(express.static(FRONTEND_PATH));
    res.sendFile(path.resolve(FRONTEND_PATH, 'index.html'));
});

app.get('/contact_manager_app', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/contact_manager_app'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'contact_manager_app', 'index.html'));
});

app.get('/password_generator_system', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/password_generator_system'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'password_generator_system', 'index.html'));
});

app.get('/responsive_sticky_navbar', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/responsive_sticky_navbar'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'responsive_sticky_navbar', 'index.html'));
});

app.get('/slideshow', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/slideshow'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'slideshow', 'index.html'));
});

app.get('/todo_app', (req, res) => {
    app.use(express.static(FRONTEND_PATH + '/todo_app'));
    res.sendFile(path.resolve(FRONTEND_PATH, 'todo_app', 'index.html'));
});

app.listen(PORT);