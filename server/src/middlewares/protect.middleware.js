import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({
            status: 'error',
            error: 'Forbidden'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 'error',
            error: 'Unauthorized'
        });
    }
}