import Router from 'express';
import AuthController from './AuthController.js';
import { check } from 'express-validator';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.post('/reg',
    [
        check('name', 'Имя пользователя не может быть пустым').notEmpty(),
        check('[password]', 'Длина пароля от 4 до 10 символов').isLength({min: 4, max: 10}),
    ],
    AuthController.reg);
router.post('/login',
    [
        check('name', 'Имя пользователя не может быть пустым').notEmpty(),
        check('[password]', 'Длина пароля от 4 до 10 символов').isLength({min: 4, max: 10}),
    ],
    AuthController.login);
router.get('/users', authMiddleware, AuthController.getUsers);

export default router;


