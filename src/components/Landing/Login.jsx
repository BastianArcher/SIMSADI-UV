import { useState } from "react"
import { useNavigate } from "react-router"
import LoginForm from "components/Landing/LoginForm"
import AlreadyLoggedIn from "components/Landing/AlreadyLoggedIn"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const validEmail = import.meta.env.VITE_AUTH_EMAIL
  const validPassword = import.meta.env.VITE_AUTH_PASSWORD

  const isAuthenticated = sessionStorage.getItem("isAuthenticated")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === validEmail && password === validPassword) {
      sessionStorage.setItem("isAuthenticated", "true")
      navigate("/menu")
    } else {
      setError("CREDENCIALES INCORRECTAS")
    }
  }

  return (
    <div className="flex justify-center bg-primary-500">
      {isAuthenticated ? (
        <AlreadyLoggedIn navigate={navigate} />
      ) : (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          error={error}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Login
