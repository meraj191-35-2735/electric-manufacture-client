import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user.email]);

  console.log(userData);

  if (loading) {
    return <Loading></Loading>;
  }
  const handleEdit = () => {
    navigate("/dashboard/updateProfile");
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="my-2 font-bold">Name: {user.displayName}</h1>
        <p className="mb-2 font-bold">Gmail : {user.email}</p>
        <p className="mb-2 font-bold">Phone : {userData?.phone}</p>
        <p className="mb-2 font-bold">University : {userData?.education}</p>
        <p className="mb-2 font-bold">Address : {userData?.address}</p>
        <a className="mb-2 font-bold" href={userData?.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <button onClick={handleEdit} className="btn btn-primary text-white">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
