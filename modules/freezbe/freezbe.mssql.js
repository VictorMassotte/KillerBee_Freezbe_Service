const mssqlcon = require('../../database/index');

class processMSSql {

    async getAllFreezbe(){
        const con = await mssqlcon.getConnection();
        const res = await con.request().query('SELECT * FROM freezbe');

        return res.recordset;
    }

    async getFreezbeById(id){
        const con = await mssqlcon.getConnection();
        const res = await con.request().input('id', id).query('SELECT * FROM freezbe WHERE id = @id');
        return res.recordset;
    }

    async addFreezbe(prod) {
        console.log(prod);
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("name", prod.name)
        .input("description", prod.description)
        .input("pUHT", prod.pUHT)
        .input("gamme", prod.gamme)
        .input("ingredients", prod.ingredients)
        .input("grammage", prod.grammage)
        .execute("dbo.InsertFreezbe");
        return res;
    }

    async updateFreezbe(id, prod) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .input("name", prod.name)
        .input("description", prod.description)
        .input("pUHT", prod.pUHT)
        .input("gamme", prod.gamme)
        .input("ingredients", prod.ingredients)
        .input("grammage", prod.grammage)
        .execute("dbo.UpdateFreezbe");
        return res;
      }

      async deleteFreezbe(id) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .execute("dbo.DeleteFreezbe");
        return res;
      }
 
}

module.exports = new processMSSql();