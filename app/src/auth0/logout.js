import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white', 
    borderRadius: '10px',
    border: "none"
  };

  return (
    <button style={buttonStyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;