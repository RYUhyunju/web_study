const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: true,
                },
                user_pass: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                user_name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'User',
                tableName: 'users',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
};
