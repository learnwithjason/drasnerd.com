const Prismic = require('@prismicio/client');

const options = {
  // accessToken:
};

exports.client = Prismic.client('http://drasnerd.prismic.io/api', options);
