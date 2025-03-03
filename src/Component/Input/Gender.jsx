const Gender = (prop) => {
  return (
    <div className="border border-l-0 border-r-0 py-1 rounded px-2 flex justify-between">
      <label className="py-1">Gender </label>
      <select
        onChange={(e) => prop.setInput(e.target.value)}
        className="border  border-t-0 border-b-0 pl-2 rounded bg-gray-700 text-sm"
      >
        <option value="">Select</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
      </select>
    </div>
  );
};

export default Gender;
