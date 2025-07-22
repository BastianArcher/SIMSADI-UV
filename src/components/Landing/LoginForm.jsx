import InputLogin from "utils/LoginInput"
import Button from "utils/Button"
import UserInput from "/userInput.svg"
import PassInput from "/passwordInput.svg"

function LoginForm({ email, password, setEmail, setPassword, error, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center my-10 min-h-10 rounded-lg shadow-xl bg-white">
      <h1 className="w-full py-4 rounded-t-lg text-center text-2xl font-bold text-white bg-primary-600">INICIO DE SESIÓN</h1>
      <InputLogin
        logo={UserInput}
        name="Email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputLogin
        logo={PassInput}
        name="Password"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex flex-col my-6">
        <Button text="INGRESAR" />
        {error && <p className="py-2 font-bold text-red-500">{error}</p>}
      </div>
    </form>
  )
}

export default LoginForm
