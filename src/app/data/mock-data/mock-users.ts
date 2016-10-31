import { User } from '../models';

const MOCK_USERS: Array<User> = [
    new User({
        id: '1', firstName: 'Andre', lastName: 'Giannico', email: 'andre.giannico@bleh.com'
    }),
    new User({
        id: '2', firstName: 'Charlie', lastName: 'Winslow', email: 'charlie.winslow@gmail.com'
    }),
    new User({
        id: '3', firstName: 'John', lastName: 'Edson', email: 'john.edson@yahoo.com'
    }),
    new User({
        id: '4', firstName: 'Mack', lastName: 'Clark', email: 'mclark@yahoo.com'
    }),
    new User({
        id: '5', firstName: 'Timmy', lastName: 'Rodrigues', email: 'timrod@aol.com'
    })
];

export { MOCK_USERS };