function Input({ name, type, placeholder, value, onChange }) {
  return (
    <label className="block  dark:text-gray-300 text-gray-700 font-medium mb-2">
        {name}:
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="font-normal w-full p-2 dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-primary-400"
        required
        />
    </label>
  );
}
export default Input;
