module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Pleycowabo.05",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
