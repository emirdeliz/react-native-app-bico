import { find, persist, populate } from '../../../api/account';

describe('Account api', () => {
  it('populate account', () => {
    return populate().then((account) => {
      expect(account.name).to.equal('John Snow');
    });
  });

  it('find account', () => {
    return find().then((account) => {
      expect(account.name).to.equal('John Snow');
    });
  });

  it('edit account', () => {
    return find().then((account) => {
      const accountNew = { ...account, name: 'Tyrion Lannister' };
      return persist(accountNew).then((accountUpdated) => {
        expect(accountUpdated.name).to.equal('Tyrion Lannister');
      });
    });
  });

  it('find account edit', () => {
    return find().then((account) => {
      expect(account.name).to.equal('Tyrion Lannister');
    });
  });
});
