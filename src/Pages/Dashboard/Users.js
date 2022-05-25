import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-3">All Users</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Gmail</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} refetch={refetch}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
