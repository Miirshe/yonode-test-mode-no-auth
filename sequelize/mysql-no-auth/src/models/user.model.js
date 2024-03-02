import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const user_model = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
    },
    email : {
        type : DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default user_model;