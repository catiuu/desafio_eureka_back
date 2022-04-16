const knex = require("../dbConnection");
const axios = require("axios");
// const schema = require("../validations/inputSchema");

const registerCep = async (req, res) => {
  const { zip_code } = req.body;

  const findZipCode = await knex("ceps").where({ zip_code }).first();

  if (findZipCode) {
    return res.status(200).json(findZipCode);
  }

  if (!findZipCode) {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zip_code}/json/`
      );

      const {
        cep,
        logradouro: address,
        bairro: district,
        localidade: city,
        uf,
      } = data;

      const editedzip_code = `${cep.substr(0, 5)}${cep.substr(6, 8)}`;

      // await schema.validate(req.body, { abortEarly: false });

      const register = await knex("ceps")
        .insert({ zip_code: editedzip_code, address, district, city, uf })
        .returning("*");

      if (register.length === 0) {
        return res
          .status(400)
          .json({ mensagem: "Não foi possível cadastrar esse CEP." });
      }

      return res.status(200).json(register[0]);
    } catch (error) {
      return res.status(500).json({ mensagem: error.message });
    }
  }
};

module.exports = { registerCep };
