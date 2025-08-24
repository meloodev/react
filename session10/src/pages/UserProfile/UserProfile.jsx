import { useParams } from "react-router";

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <h3>User Profile</h3>
      <p>Username: {username}</p>
    </div>
  );
};

export default UserProfile;