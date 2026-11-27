import express from "express"
import { Router } from './routes/refri.routes.js'


const app = express()
const port = 3000

app.use(express.json())

app.get('/', (_req, res) => {
    res.json("api ok")
})

app.use("/",Router)


app.listen(port, () => {
    console.log(`api rodando EM http://localhost:${port}`);
})