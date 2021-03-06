import AccountService from '../../service/account';

class AccountRouter {
  constructor(router) {
    this.initialize(router);
  }

  initialize(router) {
    const accountService = new AccountService();

    router
      .route('/account')
      .post((req, res) => {
        accountService.persist(req.body).then(result => res.json({ result }), err => res.send(err));
      })
      .get((req, res) => {
        accountService.find().then(result => res.json({ result }), err => res.send(err));
      });
  }
}
export default AccountRouter;
