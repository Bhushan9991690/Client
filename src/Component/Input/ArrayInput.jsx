import { useState } from "react";
import { useSelector } from "react-redux";

const ArrayInput = (prop) => {
  const user = useSelector((store) => {
    return store.user;
  });
  const [Data, setData] = useState("");
  const [Skills, setSkills] = useState([]);
  const handleInput = (e) => {
    const lowercaseData = Data.toLowerCase();
    if (e.key === "Enter") {
      if (Skills.includes(Data)) {
        setData("");
        return;
      }
      setSkills([...Skills, lowercaseData]);
      prop.setInput([...Skills, lowercaseData]);
      setData("");
    }
  };
  console.log(user.skills);
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 ">
        <input
          type="text"
          className="grow"
          placeholder="Add your Skills"
          value={Data}
          onKeyDown={handleInput}
          onChange={(e) => setData(e.target.value)}
        />
      </label>
      <div className="">
        Skills :- {Skills.join(", ")}
      </div>
    </div>
  );
};

export default ArrayInput;
