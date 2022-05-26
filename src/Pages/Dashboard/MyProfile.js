import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex justify-center items-center flex-col">
      <div class="overflow-x-auto my-3">
        <table class="table table-auto  w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              {(userData.phone ||
                userData.education ||
                userData.address ||
                userData.linkedin) && (
                <>
                  <th>Phone</th>
                  <th>University</th>
                  <th>Address</th>
                  <th>LinkedIn</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{userData?.phone}</td>
              <td>{userData?.education}</td>
              <td>{userData?.address}</td>
              <td>
                {userData?.linkedin && (
                  <a href={userData?.linkedin}>
                    Click Here
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleEdit} className="btn btn-primary text-white">
        Edit Profile
      </button>
    </div>
  );
};

export default MyProfile;
