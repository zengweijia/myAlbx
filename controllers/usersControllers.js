const fs = require('fs')

module.exports.getIndexPage = (req, res) => {
    // fs.readFile(__dirname + '/../views/index.html', (err, data) => {
    //     if (err) return res.end('404')
    //     res.end(data)
    // })
    res.render('index.ejs')
}

module.exports.getListPage = (req, res) => {
    // fs.readFile(__dirname + '/../views/list.html', (err, data) => {
    //     if (err) return res.end('404')
    //     res.end(data)
    // })
    res.render('list.ejs')
}

module.exports.getDetailPage = (req, res) => {
    // fs.readFile(__dirname + '/../views/detail.html', (err, data) => {
    //     if (err) return res.end('404')
    //     res.end(data)
    // })
    res.render('detail.ejs')
}

module.exports.getAdminPage = (req, res) => {
    // fs.readFile(__dirname + '/../views/admin/index.html', (err, data) => {
    //     if (err) return res.end('404')
    //     res.end(data)
    // })
    res.render('admin/index.ejs')
}