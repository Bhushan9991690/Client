const UserConn = (prop) => {
  const { firstName, gender, lastName } = prop.user;
  console.log(gender);

  return (
    <div className="card bg-base-200 w-96 shadow-xl mt-4">
      <div className="card-body border rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img
              src="http://picsum.photos/200/300.jpg"
              alt="Image"
              className="h-16 w-16 rounded-full"
            />
            <div className="ml-8 text-lg flex items-center">
              {firstName + " " + (lastName || " ")}
            </div>
          </div>
          <div className="ml-4 btn-primary btn  ">View</div>
        </div>
      </div>
    </div>
  );
};

export default UserConn;
