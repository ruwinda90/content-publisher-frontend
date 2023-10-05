import React from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorizedComp">
      UnAuthorized!
      <p onClick={() => navigate(-1)} style={{ color: "green" }}>
        Go back
      </p>
    </div>
  );
};

export default UnAuthorized;
