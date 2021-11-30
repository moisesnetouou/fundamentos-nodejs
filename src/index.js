const express = require('express'); //import do express

const app = express();  //importando função do express, passando para app

app.get("/", (request, response)=> {
  return response.json({message: "Hello World Ignite!"})
})

app.listen(3333); //A porta que ele vai ser inicializado