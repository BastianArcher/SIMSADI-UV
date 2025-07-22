import Button from "utils/Button"

function AlreadyLoggedIn({ navigate }) {
  const handleNavigation = () => navigate("/menu")

  return (
    <form className="flex flex-col items-center my-10 min-h-10 rounded-lg shadow-xl bg-white">
      <h1 className="w-lg py-4 rounded-t-lg text-center text-2xl font-bold text-white bg-primary-600">INICIO DE SESIÓN</h1>
      <div className="flex flex-col my-6">
        <Button text="REINGRESAR" onClick={handleNavigation} />
      </div>
    </form>
  )
}
export default AlreadyLoggedIn