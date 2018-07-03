'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530253260774_3888';

  // add your config here
  config.middleware = [];

  config.security = {
      csrf: {
          ignoreJSON: true
      }
  };

    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: null,
            db: 0,
        },
    }

  return config;
};
