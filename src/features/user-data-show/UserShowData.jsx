import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteUser, readData } from "../slice/userDataSlice";

const UserShowData = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(readData());
  }, [dispatch]);

  if(loading){
    return <h1>Loading....</h1>
  }
  return (
    <div className="grid grid-cols-3 m-5">
      {users && users.map((user, index) => (
        <div className="max-w-sm rounded overflow-hidden m-5 shadow-lg p-6 bg-gray-50 border" key={index}>
          <h1 className="text-xl font-bold mb-2">Name : {user.name}</h1>
          <h2 className="text-lg font-semibold mb-1">Email : {user.email}</h2>
          <h2 className="text-lg font-semibold mb-1">Age : {user.age}</h2>
          <h2 className="text-lg font-semibold mb-1">Gender : {user.gender}</h2>
          <div className="flex justify-around">
            <Link to={`/edite/${user.id}`} className="text-blue-500 hover:text-blue-700">
              Edit
            </Link>
            <Link onClick={()=>dispatch(deleteUser(user.id))} className="text-red-500 hover:text-red-700">
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserShowData;
