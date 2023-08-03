import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('bootcampcoders', 'postgres', 'Shuli#2011', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
});

/*
  user: 'postgres',
  host: 'localhost',
  database: 'db_bootcamp',
  password: 'Shuli#2011',
  port: '5432'

"postgres://postgres:Shuli#2011@localhost:5432/db_bootcamp"
*/