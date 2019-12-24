import 'dotenv/config';
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const databaseUrl = process.env.DATABASE_URL;

    this.connection = new Sequelize(databaseUrl, databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
