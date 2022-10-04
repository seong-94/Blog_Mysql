import mysql from "mysql";

export const db = mysql.createConnection({
  host: "blogdb.cxemfame1iht.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  passwords: "godqhr1553",
  database: "sys",
});
