function InputLogin({ logo, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex mx-10 mt-10 border rounded border-gray-300">
      <img src={logo} className="p-1 bg-primary-600" />

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-lg px-3 focus:outline-none focus:ring-3 focus:rounded focus:ring-primary-500"
        autoComplete="on"
        required
      />
    </div>
  );
}
export default InputLogin;
