import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-64">
        <h2 className="text-6xl font-bold py-3">Personal Dashboard: </h2>
        <img src={user?.photoURL} alt="" />
        <h2 className="text-3xl font-bold">Name: {user?.displayName} </h2>
        <h2 className="text-3xl font-bold">Email: {user.email ? user.email : "Email Not Found"} </h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
