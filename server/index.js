import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import connection from './config/database.config.js';
import authRoutes from './src/routes/auth.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/auth', authRoutes);

app.use((req, res) => res.status(404).send('404 Not Found'));

connection.connect(error => {
    if (error) throw error;
    app.listen(process.env.PORT, () => console.log('Server running on port ' + process.env.PORT));
});