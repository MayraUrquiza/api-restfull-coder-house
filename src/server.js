const express = require("express")
const { routerProducts } = require("./router/productRouter.js")

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.use("/api/productos", routerProducts)

const server = app.listen(PORT, () =>
  console.log(`Listen on ${server.address().port}`)
)
server.on("error", (error) => console.log(`Error en el servidor ${error}`))
