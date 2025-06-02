import { Router } from 'express';

import usersApi from './api/documentosApi.js';

export default (function () {

    const router = Router();

    //Users
    router.use("/", usersApi);

    return router;

})();
