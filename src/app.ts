import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Inicio de la aplicación')
})

export default app;