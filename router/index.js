const express = require('express')
const router = express.Router()

const pagesController = require('../controllers/usersControllers.js')

router.get('/', pagesController.getIndexPage)
    .get('/list', pagesController.getListPage)
    .get('/detail', pagesController.getDetailPage)

    .get('/admin', pagesController.getAdminPage)

module.exports = router