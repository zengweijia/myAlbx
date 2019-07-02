const express = require('express')
// const fs = require('fs')
// const path = require('path')

const router = require('./router/index.js')


const app = express()

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})

app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

app.set('view engine', 'ejs')
app.set('views', 'views')

// app.get('/', (req, res) => {
//     fs.readFile(path.join(__dirname, './views/admin/index.html'), (err, data) => {
//         if (err) return res.end('404')
//         res.end(data)
//     })
// })

app.use(router)