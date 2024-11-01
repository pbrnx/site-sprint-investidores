// Backend Node.js para conexão com o Oracle Database

import express from 'express';
import oracledb from 'oracledb';
import cors from 'cors';

const app = express();
const port = 25565;

app.use(express.json());
app.use(cors()); // Permitir requisições de qualquer origem

// Configurações para conectar ao Oracle Database
const dbConfig = {
  user: 'RM99781',
  password: '270904',
  connectString: 'oracle.fiap.com.br:1521/ORCL'
};

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
  const { nome, email, celular, nomeEmpresa, mensagem, avaliacao } = req.body;

  // Verificação dos campos obrigatórios
  if (!nome || !email || !celular || !nomeEmpresa) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const query = `
      INSERT INTO USERS (NOME, EMAIL, CELULAR, NOME_EMPRESA, MENSAGEM, AVALIACAO)
      VALUES (:nome, :email, :celular, :nomeEmpresa, :mensagem, :avaliacao)
    `;

    const result = await connection.execute(
      query,
      { nome, email, celular, nomeEmpresa, mensagem, avaliacao },
      { autoCommit: true }
    );

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', result });

  } catch (err) {
    console.error(err);
    if (err.errorNum === 1) {
      res.status(409).json({ message: 'Esse usuário já foi adicionado.' });
    } else {
      res.status(500).json({ message: 'Erro ao cadastrar o usuário.' });
    }
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

// Rota para obter todos os usuários
app.get('/users', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const query = `
      SELECT * FROM USERS
    `;

    const result = await connection.execute(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
