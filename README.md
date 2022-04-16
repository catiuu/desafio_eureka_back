<div align="center">
 <h2 >Desafio Técnico -  Eureka</h2>
</div>

---

## 💻 Sobre o projeto

Este é o back-end da aplicação web desenvolvida para avaliação de competências técnincas do processo seletivo da Eureka.

**Desafio proposto:**
Elaborar uma aplicação para ajudar um usuário a fazer a consulta de um CEP. Onde ao informar um CEP a tela apresentará informações de endereço como bairro, município e logradouro. Para tal crie uma um api rest com integração com o serviço ViaCEP e uma aplicação web.
No backend deverá ser feito um cache das consultas realizadas pelo usuário. Após uma consulta ser feita na api do viaCEP, as informações de endereço devem ser armazenadas em um banco de dado e nas consultas subsequentes do mesmo CEP, estas informações devem ser retornadas com o que foi salvo no banco de dados sem buscar novamente no serviço viaCEP.

💻 [Acesse a aplicação]()

:globe_with_meridians: [Front-end da aplicação]()

---

## ⚙️ Executando o projeto:

### Instruções:

1. Clonar o repositório

```sh
   git clone https://github.com/catiuu/desafio_eureka_back
```

2. Alterar arquivo .env com as configurações do seu banco de dados.
3. Instalando os pacotes

```sh
    npm install
```

---

## 🛠️ Tecnologias utilizadas

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/Postgres-07405E?style=for-the-badge&logo=postgresql&logoColor=white" />
</div>
