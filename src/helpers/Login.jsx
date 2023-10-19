

export const inputsLogin = [
    {
        type: "text",
        name: "email",
        placeholder: "Ingresa tu email",
        validator: {
            required: "¡Este campo es obligatorio! ⚠️",
            pattern: {
              value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
              message: "¡El correo no es válido! 🚫",
            },
            maxLength: {
              value: 100,
              message: "¡Este campo no puede tener más de 100 caracteres! 🔠",
            },
          }
    },
    {
        type: "password",
        name: "password",
        placeholder: "Ingresa tu contraseña",
        validator: {
            required: "¡Este campo es obligatorio! ⚠️",
            minLength: {
              value: 6,
              message: "¡La contraseña debe tener al menos 6 caracteres! 🔠",
            },
          }
    }
]