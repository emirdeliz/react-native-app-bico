import express from 'express';

import ProfessionalService from '../service/professional';
import professionalPopulate from '../populate';

const router = express.Router();
const professionalService = new ProfessionalService();

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/professional').post((req, res) => {
    professionalService.persist(req.body).then(
        (result) => res.json(result),
        (err) => res.send(err)
    );
}).get((req, res) => {
    professionalService.findAll().then(
        (result) => res.json({result}),
        (err) => res.send(err)
    );
});

router.route('/professional/:professional_id').get((req, res) => {
    professionalService.findById(req.params.professional_id).then(
        (result) => res.json(result),
        (err) => res.send(err)
    );
}).put((req, res) => {
    professionalService.persist(req.body).then(
        (result) => res.json({ result }),
        (err) => res.send(err)
    );
}).delete((req, res) => {
    professionalService.remove(req.params.professional_id).then(
        (result) => res.json({ result }),
        (err) => res.send(err)
    );
});

router.route('/populate/professional').get((req, res) => {
    professionalPopulate().then(
        (result) => res.json(result),
        (err) => res.send(err)
    );
});

export default router;
