// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/db', controller.createDb);
router.post('/records', controller.createRecord);
router.get('/records', controller.getRecords);
router.put('/records/:id', controller.updateRecord);
router.delete('/records/:id', controller.deleteRecord);
router.get("/table", controller.createTable);

module.exports = router;
