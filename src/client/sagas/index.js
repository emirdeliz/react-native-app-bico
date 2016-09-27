import professional from './professional';
import account from './account';

export { professional, account };


export default function* rootSaga() {
    yield [
        professional(),
        account(),
    ];
}
