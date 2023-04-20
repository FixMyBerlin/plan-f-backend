module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
    },
    debug: false,
  },
});
