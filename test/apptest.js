const request = require('supertest'); 

const app = require('../apptest'); // Certifique-se de que o caminho esteja correto 

 

describe('Testes de Rotas de carros', () => { 

  it('Deve listar todos os carros (GET /carros)', async () => { 

    const response = await request(app).get('/carros');

    expect(response.statusCode).toEqual(200); 

    expect(response.body).toBeInstanceOf(Array); 

  }); 

 

  it('Deve criar um novo carro com campos válidos (POST /carros)', async () => { 

    const newCarros = { 

      nome: 'Corsa', 

      marca: 'Opel', 

      modelo: 'duas portas', 

      ano: '2011',

      foto: 'corsa.jpg', 

    }; 

 

    const response = await request(app) 

      .post('/Carros') 

      .send(newCarros); 

 

    expect(response.statusCode).toEqual(201); 

    expect(response.body).toHaveProperty('_id'); 

  }); 

 

  it('Deve retornar erro ao criar um novo contato com campos inválidos (POST /Carros)', async () => { 

    const invalidCarros = { 

      modelo: 'duas portas', 

      ano: '2011', 

      foto: 'corsa.jpg', 

    }; 

 

    const response = await request(app) 

      .post('/Carros') 

      .send(invalidCarros); 

 

    expect(response.statusCode).toEqual(400); 

    expect(response.body).toHaveProperty('message'); 

  }); 

 

  it('Deve retornar erro ao acessar uma rota inexistente (GET /rota-inexistente)', async () => { 

    const response = await request(app).get('/rota-inexistente'); 
     
    expect(response.statusCode).toEqual(404); 

    expect(response.body).toHaveProperty('message'); 

  }); 

}); 