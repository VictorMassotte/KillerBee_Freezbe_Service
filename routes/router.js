const processMySQL = require('../modules/freezbe/freezbe.mssql');

class freezbe {

    async getAllFreezbe(req, res) {
        try {
            const output = await processMySQL.getAllFreezbe();
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async getFreezbeById(req, res) {
        try {
            const output = await processMySQL.getFreezbeById(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async addFreezbe(req, res) {
        try {
            const output = await processMySQL.addFreezbe(req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async updateFreezbe(req, res) {
        try {
            const output = await processMySQL.updateFreezbe(req.params.id, req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteFreezbe(req, res) {
        try {
            const output = await processMySQL.deleteFreezbe(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new freezbe();