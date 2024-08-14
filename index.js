const express = require('express') // cài thư viện để xài
const app = express() //function của express, trả về đối tượng đại diện cho app
const port = 3000 //cổng website
//get: định nghĩa tuyến đường (route)
app.get('/tin-tuc', (req, res) => {
    var a = 1
    var b = 2

    var c = a + b
  res.send('Hello World!')
})

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})