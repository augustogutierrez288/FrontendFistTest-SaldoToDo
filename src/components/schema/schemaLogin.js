import * as Yup from "yup";

export const loginSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email("Formato del email invalido")
        .required("El email es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
    }
)