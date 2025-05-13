// routes/usuarios.js
const express = require('express');
const ClientRouter = express.Router();
const db = require('../../../db'); // importa a conexão com o banco

// Rota GET para listar usuários
ClientRouter.get('/', (_req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Erro ao buscar clientes:', err);
      res.status(500).json({ error: 'Erro no servidor' });
      return;
    }
    res.status(200).json(results);
  });
});

ClientRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar cliente:', err);
            res.status(500).json({ error: 'Erro no servidor' });
            return;
          }
          if(results.length == 0) {
            res.status(404).json({error: 'Usuário não encontrado!'});
            return;
          }
          res.status(200).json(results[0]);
    })
})

ClientRouter.post('/', (req, res) => {
    const {
        nome,
        idade,
        peso,
        altura
    } = req.body;

    db.query('INSERT INTO clientes (nome, idade, peso, altura) VALUES (?, ?, ?, ?)', 
        [nome, idade, peso, altura], 
        (err, results) => {
            if (err) {
                console.error('Erro ao cadastrar cliente:', err);
                res.status(500).json({ error: 'Erro no servidor' });
                return;
              }
              res.status(200).json({message: "Usuário cadastrado com sucesso!!"});
    })
})

ClientRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
        nome,
        idade,
        peso,
        altura
    } = req.body;

    db.query('UPDATE clientes SET nome = ?, idade = ?, peso = ?, altura = ? WHERE id_cliente = ?', 
        [nome, idade, peso, altura, id],
        (err, results) => {
            if (err) {
                console.error('Erro ao atualizar cliente:', err);
                res.status(500).json({ error: 'Erro no servidor' });
                return;
            }
            res.status(200).json({message: "Usuário atualizado com sucesso!"});
    });
    
})

ClientRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM clientes WHERE id_cliente = ?', [id], (err, responses) => {
        if(err) {
            console.log(`Erro ao deletar cliente: ${err}`)
            res.status(404).json({error: "Usuário não encontrado"});
            return;
        }
        res.status(201).json({message: "Usuário deletado com sucesso!"})
    })
})

// Você pode adicionar mais rotas aqui (POST, PUT, DELETE)

export default ClientRouter;