const { server: server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const stor = require('../lib/server.js');

// app.get('/products', (req, res) => {}) (and app.post(), app.put(), app.delete())
// app.get('/categories', (req, res) => {}) (and app.post(), app.put(), app.delete())

describe('our server', () => {
  it('get product successfully', () => {
    return mockRequest
      .get('/product/')
      .send(stor)
      .then(results => {
        expect(results.status).toBe(200);
        expect(mockRequest.body).toBe(stor.category);
      })
      .catch(err => console.log(err));
  });
  // it('adds another item on a POST rquest to categories', ()=> {
  //   const newCategory =  { name: 'test category' };
  //   return mockRequest
  //     .post('/categories')
  //     .send(newCategory)
  //     .then(results => {
  //       expect(results.status).toBe(201);
  //       expect(results.body.name).toEqual('test category');
  //     });
  // });
});
