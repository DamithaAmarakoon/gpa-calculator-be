const config = {};

config.web_port = process.env.HTTP_PORT;

config.database = process.env.DATABASE_URL;

config.server_path = process.env.SERVER_PATH;

module.exports = config;
