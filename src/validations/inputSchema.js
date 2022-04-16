const yup = require("./settings");

const inputSchema = yup.object().shape({
  zip_code: yup
    .string()
    .min(8)
    .max(8)
    .nullable()
    .required("O campo é obrigatório."),
});

module.exports = inputSchema;
