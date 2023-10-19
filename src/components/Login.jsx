/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

// HELPERS
import {inputsLogin} from "../helpers/Login"

// ESTILOS
import "../styles/Login.css"

export default function Login({setSection, setEmail}){

    const {register, handleSubmit, formState: {errors}} = useForm({criteriaMode: "all"})

    const handleLogin = handleSubmit(async(data) => {
        const {email } = data
        setEmail(email)
        setSection("Home")
    })

    return(
        <form onSubmit={handleLogin} className="Main__Login">
            <img src="https://cdn-icons-png.flaticon.com/512/1053/1053364.png" alt="Login Icon" className="Main__Login--Icon" />
            <h1 className="Main__Login--Title">Iniciar Sesión</h1>
            {
              inputsLogin.map(({type, name, placeholder, validator}, index) => {
                return(
                  <div className="Main__Login--Content" key={index}>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      {...register(name, validator)}
                      className="Main__Login--Content--Input"
                    />
                    <ErrorMessage errors={errors} name={name} render={({message}) => <small className="Main__Login--Content--Error">{message}</small>} />
                  </div>
                )
              })
            }
            <button className="Main__Login--Button">Iniciar Sesión</button>
        </form>
    )
}