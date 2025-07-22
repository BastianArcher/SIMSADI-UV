function Selector({ selectedOp, onChange, operations }) {
  return (
    <>
      <label className="dark:text-gray-300 text-gray-700 font-semibold mb-2">
        Seleccionar operación:
        <select
          name="operacion"
          value={selectedOp.Operacion}
          onChange={onChange}
          className="w-full p-2 font-normal dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-primary-400"
        >
          {operations.map((op) => (
            <option key={op.Operacion} value={op.Operacion}>
              {op.Operacion}
            </option>
          ))}
        </select>
      </label>
      <p className="italic font-medium dark:text-gray-300 text-gray-600 mt-1 mb-6">⨠{selectedOp.Descripcion}</p>
    </>
  );
}
export default Selector;
