import config from '../config.js';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        let token = req.cookies?.authorization?.split(' ')[1];

        if (!token) {
            return res.status(403).json({
                message: 'not auth'
            });
        }

        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next();
    } catch (e) {
        console.log(e);
        return res.status(403).json({
            message: 'not auth'
        });
    }
};