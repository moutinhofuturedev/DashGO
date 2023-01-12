import * as yup from "yup"

export const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório.").email("E-mail inválido."),
    password: yup.string().required("Senha é obrigatório.").min(6, "Senha deve conter 6 caracteres ou mais.")
})

export const userFormSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("E-mail é obrigatório.").email("E-mail inválido."),
    password: yup.string().required("Senha é obrigatório.").min(6, "Senha deve conter 6 caracteres ou mais."),
    password_confirmation: yup.string().oneOf([
        null, yup.ref("password")
    ], "As senhas precisam ser iguais")
})