import React, { useState } from "react";

const UserData = () => {
  const [data, setData] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    age: 0,
  });
  const [user, setUser] = useState([]);
  const [editeId, setEditeId] = useState(null);
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if(editeId !== null){

        const updateUser = user.map(user => user.id === editeId ? {...data,id:editeId}: user)
        setUser(updateUser)
        setEditeId(null)

    }else{
        setUser([...user, { ...data, id: Date.now() }]);

    }
    setData({
      id: Date.now(),
      firstName: "",
      lastName: "",
      age: 0,
    });
  };

  const handleEdite = (id) => {
    console.log(id);
    const updateUser = user.find((user) => user.id === id);
    setData({
      id: Date.now(),
      firstName: updateUser.firstName,
      lastName: updateUser.lastName,
      age: updateUser.age,
    });
    setEditeId(id)
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your FirstName"
            name="firstName"
            value={data.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter Your LastName"
            name="lastName"
            value={data.lastName}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Enter Your Ege"
            name="age"
            value={data.age}
            onChange={handleInputChange}
          />
          <input type="submit" value={editeId !== null ? "Update" :"Submit"} />
        </form>
      </div>

      <div>
        <h1>User Data</h1>
        <div>
          {user.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px",
              }}
            >
              <p>First Name: {item.firstName}</p>
              <p>Last Name: {item.lastName}</p>
              <p>Age: {item.age}</p>
              <button onClick={() => handleEdite(item.id)}>Edite</button>
              <button
                onClick={() => {
                  setUser(user.filter((user) => user.id !== item.id));
                  console.log(item.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserData;
