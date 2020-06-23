import KoaBody from 'koa-body';

export default async (app) => {
  app.use(
    KoaBody({
      multipart: true,
      parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'], // parse GET, HEAD, DELETE requests
      //   formidable: {
      //     uploadDir: path.join(__dirname, '../assets/uploads/tmp'),
      //   },
      jsonLimit: '10mb',
      formLimit: '10mb',
      textLimit: '10mb',
    })
  );
};
