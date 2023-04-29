import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setUserData(userDoc.data());
      }
    };
    fetchUserData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {user && user.email}</p>
      {userData && (
        <>
          <p>Name: {userData.name}</p>
          <p>LinkedIn: {userData.linkedin}</p>
          <p>Current Team: {userData.currentTeam}</p>
          <p>Member Since: {userData.memberSince}</p>
        </>
      )}
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;