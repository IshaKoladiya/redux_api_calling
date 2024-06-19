import React, { useState } from 'react'
import styles from './form-style.module.css'
import { useDispatch } from 'react-redux';
import { createUser } from '../slice/userDataSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        age:'',
      });
    
      const dispatch = useDispatch()
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData))
        console.log(formData)
        navigate('/show-all-user')
       
      }


  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Registration Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Name</label>
          <input className={styles.formInput} type="text" value={formData.name} id="name" name="name" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="age">Age</label>
          <input className={styles.formInput} type="number" value={formData.age} id="age" name="age" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">Email</label>
          <input className={styles.formInput} type="email" id="email" value={formData.email} name="email" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Gender</label>
          <div className={styles.radioGroup}>
            <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange}/>
            <label className={styles.radioLabel} htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange}/>
            <label className={styles.radioLabel} htmlFor="female">Female</label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <input className={styles.formSubmit} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Form
