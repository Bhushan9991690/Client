const Text = (prop) => {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 ">
        <div className="w-28">{prop.text}</div>
        <input
          type="text"
          className="grow"
          placeholder={prop.text}
          onChange={(e) => prop.setInput(e.target.value)}
          value={prop.value}
        />
      </label>
    </>
  );
};

export default Text;
