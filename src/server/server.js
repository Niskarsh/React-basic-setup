import express from 'express'


let app = express()


app.use (express.static( `${__dirname}/../../public`))

const port = process.env.PORT || 3000

app.get ('/', (req, res) => {
    res.send ('index.html')
})

app.listen (port, () => {
        console.log (`Started listening on port : ${port}`)
    }
)
