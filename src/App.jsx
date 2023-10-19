// COMPONENTES
import Home from "./components/Home"
import Login from "./components/Login"

// HOOKS
import useSection from "./hooks/useSection"
import useEmail from "./hooks/useEmail"

// ESTILOS
import "./App.css"

export default function App(){

  const {section, setSection} = useSection()
  const {email, setEmail} = useEmail()

  const currentComponent = {
    Login: <Login setSection={setSection} setEmail={setEmail}/>,
    Home: <Home email={email}/>
  }

  return(
    <main className="Main">
      {
        currentComponent[section]
      }
    </main>
  )

}