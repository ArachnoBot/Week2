const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
app.use(express.static("public"))

let wordList = []

app.get("/hello", (req, res) => {
    message = {msg: "hello world"}
    res.send(message)
})

app.get("/echo/:id", (req, res) => {
    res.send(req.params)
})

app.post("/sum", (req, res) => {
    const numbers = req.body.numbers
    let finalSum = 0

    for (let num of numbers) {
        finalSum += num
    }

    res.send({"sum": finalSum})
})

app.post("/list", (req, res) => {
    wordList.push(req.body.text)
    list = {list: wordList}
    res.send(list)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })