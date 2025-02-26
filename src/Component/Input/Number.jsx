const Number = (prop) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="number"
        placeholder={prop.text}
        onChange={(e) => {
          prop.setInput(e.target.value);
        }}
      />
    </label>
  );
};

export default Number;
