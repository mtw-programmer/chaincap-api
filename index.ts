import './services/mongodb';

import config from './utils/config';
import log from './utils/log';

import app from './services/express';

const port = config.APP_PORT || 4000;
export default app.listen(port, () => log.init({ label: 'Index', message: `App listening on port ${port}` }));
