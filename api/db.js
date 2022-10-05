import mysql from "mysql";

export const db = mysql.createConnection({
  hostname: "blogdb.cxemfame1iht.ap-northeast-2.rds.amazonaws.com",
  username: "admin",
  port: 3306,
  password: "godqhr1553",
  database: "sys",
});
