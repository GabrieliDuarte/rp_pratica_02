import express from "express"
import { refriRouter } from './routes/refri.routes.js'


const app = express()
const port = 3000

app.use(express.json())

app.get('/', (_req, res) => {
    res.json("api ok")
})

app.use("/",refriRouter)


app.listen(port, () => {
    console.log(`api rodando EM http://localhost:${port}`);
})