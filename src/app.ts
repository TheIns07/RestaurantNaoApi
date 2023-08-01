import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import privateRoutes from './routes/private.routes'
import specialRoutes from './routes/special.routes'

const app = express();

app.set('port', process.env.PORT || 3001);

const corsOptions = {
    origin: 'http://localhost:3001/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Inicio de la aplicación')
})

app.use(privateRoutes);
app.use(specialRoutes);

export default app;