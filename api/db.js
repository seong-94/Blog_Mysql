import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  passwords: "godqhr1553!",
  database: "local_blog",
});
