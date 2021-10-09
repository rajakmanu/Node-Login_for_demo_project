module.exports = {
  database: "manisha",
  username: "root",
  password: "bias1234",
  host: "database-2.ci4a0sestdfi.ap-south-1.rds.amazonaws.com",
  port: "3306",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

