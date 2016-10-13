import AccountService from '../../service/account';
import { accountPopulate } from '../../populate';

class AccountRouter {
    constructor(router) {
        this.initialize(router);
    }

    initialize(router) {
        const accountService = new AccountService();

        router.route('/account').post((req, res) => {
            accountService.persist(req.body).then(
                (result) => res.json({ result }),
                (err) => res.send(err)
            );
        }).get((req, res) => {
            accountService.find().then(
                (result) => res.json({ result }),
                (err) => res.send(err)
            );
        });

        router.route('/account/populate').get((req, res) => {
            accountPopulate().then(
                (result) => res.json({ result }),
                (err) => res.send(err)
            );
        });
    }
}
export default AccountRouter;
