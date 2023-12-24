import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

const FRONTEND_PATH = path.resolve() + '\\src\\frontend';

app.get('/contact_manager_app', (req, res) => {
    res.sendFile(path.resolve(FRONTEND_PATH, 'contact_manager_app', 'index.html'));
});

app.get('/password_generator_system', (req, res) => {
    res.sendFile(path.resolve(FRONTEND_PATH, 'password_generator_system', 'index.html'));
});

app.get('/responsive_sticky_navbar', (req, res) => {
    res.sendFile(path.resolve(FRONTEND_PATH, 'responsive_sticky_navbar', 'index.html'));
});

app.get('/slideshow', (req, res) => {
    res.sendFile(path.resolve(FRONTEND_PATH, 'slideshow', 'index.html'));
});

app.get('/todo_app', (req, res) => {
    res.sendFile(path.resolve(FRONTEND_PATH, 'todo_app', 'index.html'));
});

app.listen(PORT);