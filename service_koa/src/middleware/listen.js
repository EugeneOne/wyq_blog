import { SYSTEM as SystemConfig } from '../config';

export default async (app) => {
  app.listen(SystemConfig.SERVER_PORT);

  console.log(
    'Now start API server on port ' + SystemConfig.SERVER_PORT + '...'
  );
};
