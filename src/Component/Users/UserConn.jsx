import { Link } from "react-router-dom";

const UserConn = (prop) => {
  const { firstName, lastName, _id } = prop.user;
  const userId = _id;

  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body border rounded-2xl">
        <div className="flex items-center justify-between md:w-[29rem] w-[17rem] w-min-auto">
          <div className="flex">
            <img
              src="http://picsum.photos/200/300.jpg"
              alt="Image"
              className="md:h-14 md:w-14 h-10 w-10 rounded-full"
            />
            <div className="md:ml-8 ml-2 mr-2 md:text-lg text-sm flex items-center   ">
              {firstName + " " + (lastName || " ")}
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" btn bg-blue-500 text-sm px-4">View</div>
            <div className=" btn bg-green-500 text-sm px-4">
              <Link to={"/chat/" + userId}>chat</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConn;
