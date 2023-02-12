const express = require('express')
const app = express()
const port = 3001
const routes = require('./routes/routes')
const cors = require ('cors')


app.use(express.json())
app.use(cors())
app.use('/', routes)

app.get('/', (req, res) => {
  res.send('Olá Mundo!!')
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})