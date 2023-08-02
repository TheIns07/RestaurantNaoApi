"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'TOKEN',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/naodatabase',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};
