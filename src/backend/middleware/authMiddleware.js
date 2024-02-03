import config from '../config.js';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        let token = req.cookies?.authorization?.split(' ')[1];

        if (!token) {
            res.redirect('/login');
            return;
        }

        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next();
    } catch (e) {
        console.log(e);
        res.redirect('/login');
        return;
    }
};