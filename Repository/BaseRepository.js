import pool from "./db.js";

class BaseRepository {
  async getAll(table, columnsArray) {
    try {
      let columnsName = "";
      const results = (
        await pool.query(`SELECT ${columnsArray.join()} FROM ${table}`)
      ).rows;
      return results;
    } catch (erro) {
      throw erro;
    }
  }

  async getById(table, columnsArray, id) {
    try {
      // In order to protect against "SQL Injection" I will not put my ID on my query directly, I will create a string first with $1 to replace to my parametrer.
      // With that I give the security responsability to pg, that is way more prepare than me
      const queryText = `SELECT ${columnsArray.join()} FROM ${table} WHERE id = '$1'`;
      const result = (await pool.query(queryText, [id])).rows[0];
      return result;
    } catch (erro) {
      throw erro;
    }
  }

  // As I am using Postgre database, I will use TRANSACTION and COMMIT to deal with other methods of CRUD.
  // To do that, I can not use pool.query("TRANSACTION") and afterwards pool.query("INSERT ...") because TRANSACTION it is related to the connection of the pool, and when I run two lines of pool.query, it could get different connection for each line

  async insertOne(table, columnsArray, valuesArray) {
    const client = await pool.connect();
    try {
      // flagsString will be $1, $2, $3 until the length of values Array, in order to don't put pass these values as parametres, not directly on the query. In order to avoid SQL Injection
      let flagsString = new Array(valuesArray.length); // Empty array with valuesArray.length indexes. EX -> [ , , , ]
      flagsString = Array.from(flagsString.keys()); // Array full of indexes until length of valuesArray. EX -> [0,1,2,3]
      flagsString = flagsString.map((element) => {
        return `$${element + 1}`;
      }); // As I want '$' before each index to pass it as a parametrer. Adding one to start on $1. EX -> ['$1','$2','$3','$4']
      flagsString = flagsString.join(); // '$1,$2,$3,$4'

      queryText = `INSERT INTO ${table} (${columnsArray.join()}) VALUES (${flagsString})`;

      await client.query("BEGIN TRANSACTION");
      await client.query(queryText, valuesArray);
      await client.query("COMMIT");
    } catch (erro) {
      await client.query("ROLLBACK");
      throw erro;
    } finally {
      client.release();
    }
  }
}

export default BaseRepository;
