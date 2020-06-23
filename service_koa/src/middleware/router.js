import mainRouters from '../routes';

export default async (app) => {
  app.use(mainRouters.routes(), mainRouters.allowedMethods());
};
