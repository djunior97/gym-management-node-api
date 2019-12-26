require('dotenv').config();

module.exports = {
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
};
