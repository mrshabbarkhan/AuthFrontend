import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user]);

  return (
    <div className="body">
      <div className="home">

      </div>
    </div>
  );
};

export default Home;
