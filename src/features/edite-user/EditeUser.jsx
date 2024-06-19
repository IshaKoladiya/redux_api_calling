import React, { useEffect, useState } from "react";
import styles from "../form/form-style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../slice/userDataSlice";

const EditeUser = () => {
  const [formData, setFormData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData))
    navigate("/show-all-user");
  };
  const { users, loading } = useSelector((state) => state.app);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.filter((user) => user.id === id);
      setFormData(user[0]);
    }
    console.log(formData)

  }, []);

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Edite Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={formData && formData.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="age">
            Age
          </label>
          <input
            className={styles.formInput}
            type="number"
            value={formData && formData.age}
            id="age"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            value={formData && formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Gender</label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData && formData.gender === "male"}
              onChange={handleChange}
            />
            <label className={styles.radioLabel} htmlFor="male">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData && formData.gender === "female"}
              onChange={handleChange}
            />
            <label className={styles.radioLabel} htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.formSubmit}
            type="submit"
            value="EditeUser"
          />
        </div>
      </form>
    </div>
  );
};

export default EditeUser;
