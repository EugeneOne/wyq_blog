const home = {
  homePage: async (ctx, next) => {
    ctx.body = {
      code: 0,
      msg: 'home',
    };
  },
};

module.exports = home;
