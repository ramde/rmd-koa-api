const request = require('supertest');
const server = require('../index.js');

beforeAll(async () => {
    // do something before anything else runs
    console.log('Jest starting!');
});

// close the server after each test
afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('basic route tests', () => {
    test('get home route GET /', async () => {
        const response = await request(server).get('/heythere');
        expect(response.status).toEqual(200);
        //  expect(response.body).toContain('Hello World!');
    });
});