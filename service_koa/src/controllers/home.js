const home = {
  homePage: async (ctx, next) => {
    ctx.body = {
      code: 200,
      msg: 'home',
    };
  },
};

module.exports = home;
