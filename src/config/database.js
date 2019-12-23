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
  // host: '127.0.0.1',
  // port: '5432',
  // username: 'postgres',
  // password: 'docker',
  // database: 'gympoint',
};
