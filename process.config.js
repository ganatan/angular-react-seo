module.exports = {
    apps : [
      {
        name      : 'angular-starter',
        script    : 'app',
        env: {
          COMMON_VARIABLE: 'true'
        },
        env_dev : {
          NODE_ENV: 'dev'
        },
        env_prod : {
          NODE_ENV: 'prod'
        }
      }
    ],
  };
  