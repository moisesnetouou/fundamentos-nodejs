const express = require('express'); 

const app = express(); 
app.use(express.json());

/**
 * GET    - Buscar uma informação dentro do nosso servidor
 * POST   - Inserir uma informação no servidor.
 * PUT    - Alterar uma informação no servidor.
 * PATCH  - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor.
 */

/**
 * Tipos de parâmetros
 * 
 * Routes Params -> Parametros que vamos receber encapsulado na nossa rota,
 *  servem para identificar um recursos para editar/deletar/buscar um recurso.
 * 
 * Query Params -> Vão estar na rota mas de uma forma diferente
 *  Páginação, filtro.
 * 
 * Body Params -> Os Objetos inserção/alteração de algum recurso. 
 *  (cadastrp ou update) -> JSON
 */

app.get("/courses", (request, response)=> {
  const query = request.query;
  console.log(query);
  return response.json([
    "Curso 1", "Curso 2", "Curso 3"
  ])
})

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json([
    "Curso 1", "Curso 2", "Curso 3", "Curso 4"
  ])
})

app.put("/courses/:id", (request, response) => {
  const {id} = request.params;
  console.log(id);
  return response.json([
    "Curso 6", "Curso 2", "Curso 3", "Curso 4"
  ])
})

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6", "Curso 7", "Curso 3", "Curso 4"
  ])
})

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6", "Curso 2",  "Curso 4"
  ])
})

app.listen(3333); 