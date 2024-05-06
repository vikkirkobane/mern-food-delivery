import { Button } from "./ui/button";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link to="/user-profile" 
        className="flex bg-white items-center font-bold hover:text-orange-500">
        User Profile
      </Link>
      <Button onClick={() => logout()} className="flex-1 font-bold bg-orange-500">
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;