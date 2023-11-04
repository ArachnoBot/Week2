const express = require("express")
const { workerData } = require("worker_threads")
const app = express()
const port = 3000
app.use(express.json())
app.use(express.static("public"))

let wordList = []

app.get("/hello", (req, res) => {
    console.log("hello requested")
    message = {msg: "hello"}
    res.send(message)
})

app.get("/echo/:id", (req, res) => {
    console.log("id requested")
    console.log(req.body)
    res.send(req.params)
})

app.post("/sum", (req, res) => {
    console.log("sum requested")
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
    console.log(list)
    res.send()
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })