import express from 'express';

import AccountRouter from './account';
import ProfessionalRouter from './professional';

const router = express.Router();
const professionalService = new ProfessionalService();

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

new AccountRouter(router);
new ProfessionalRouter(router);

export default router;
