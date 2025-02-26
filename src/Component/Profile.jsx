import Edit from "./Edit";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((store) => store.user);
  return <>{user && <Edit user={user}/>}</>;
};

export default Profile;
