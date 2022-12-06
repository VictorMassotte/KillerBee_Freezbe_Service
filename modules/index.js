class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const process = require('../controllers/freezbe.controller');
    new process(this.app);
   }
  }
  
  module.exports = Module;