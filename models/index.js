const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
const Page = db.define('page', {
	title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Wikistacks'
	},
	slug: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
	},
	content: {
        type: Sequelize.TEXT, 
        allowNull: false,
        validate: {
            notEmpty: true
        }
	},
	status: {
		type: Sequelize.ENUM('open', 'closed')
	}
});

const User = db.define('user', {
	name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            notEmpty: true,
            len: [3, 14]
        }
	},
	email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
	}
});

module.exports = {
	db,
	Page,
	User
};
