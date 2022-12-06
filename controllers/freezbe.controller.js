const freezbe = require('../routes/router')
const express = require('express');
const router = express.Router();

class freezbeController {
    constructor(app) {
        router.get('/', freezbe.getAllFreezbe);
        router.get('/:id', freezbe.getFreezbeById);
        router.post('/', freezbe.addFreezbe);
        router.put('/:id', freezbe.updateFreezbe);
        router.delete('/:id', freezbe.deleteFreezbe);
      
      app.use('/api/v1/freezbe', router);
    }
 }
module.exports = freezbeController;