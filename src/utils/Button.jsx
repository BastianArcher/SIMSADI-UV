function Button ({ text, onClick, type = 'submit' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={'px-4 py-3 text-white text-lg bg-primary-600 font-semibold rounded transition hover:bg-primary-700 hover:'}
    >
      {text}
    </button>
  );
}
export default Button;