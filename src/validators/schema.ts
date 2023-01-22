import * as yup from "yup";

export const schemaSimulation = yup.object().shape({
    amount: yup.number().required("O valor da venda deve ser informado apenas com numeros"),
    installments: yup.number().required("A quantidade de parcelas deve ser informada apenas com numeros"),
    mdr: yup.number().required("O percentual de MDR deve ser informado apenas com numeros"),
    days: yup.array().of(yup.number().typeError("Dias devem ser informados apenas com numeros")).optional()
  });