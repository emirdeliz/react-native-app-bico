'use strict';

import { expect } from 'chai';
import { find, persist, populate } from '../../../api/account';

describe("Account api", () => {

    it('populate account', () => {
        return populate().then(account => {
            expect(account.name).to.equal('John Snow');
        });
    });

    it('find account', () => {
        return find().then(account => {
            expect(account.name).to.equal('John Snow');
        });
    });

    it('edit account', () => {
        return find().then(account => {
            account.name = 'Tyrion Lannister';
            return persist(account).then(account => {
                expect(account.name).to.equal('Tyrion Lannister');
            });
        });
    });

    it('find account edit', () => {
        return find().then(account => {
            expect(account.name).to.equal('Tyrion Lannister');
        });
    });
});
