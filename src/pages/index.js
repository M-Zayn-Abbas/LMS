import React from 'react'
import '../css/index.css'
import icon from '../images/icon.png'
import { useForm } from "react-hook-form";
import ImageCarousel from '../components/carousel';



const IndexPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className='main-container'>
      <div className='header'>
        <img className="logo" src={icon}></img>

      </div>
      <div className='body'>
        <div className='form-container'>
          <div className='form'>
            <h2 id="h2">Login</h2>
            <h4 className="h4 h4color">Sign in to continue</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className='field-container'>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
        </div>

        {/* Password Field */}
        <div className='field-container'>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
        </div>

        {/* Submit Button */}
        <button className='login-btn' type="submit">Login</button>
      </form>
      <h4 className="h4 h4color">Forgot your username or password?</h4>
      <h4 className='h4'>Cookies must be enabled in your browser</h4>
      <h4 className='h4'>Some courses may allow guest access</h4>
      <button className='login-btn guestbtn'>Login As A Guest</button>





          </div>
          <div className='text'>
          <h2 className="h2">Is this your first time here?</h2>
          <h4 className='h4 highlight'>Welcome to the Refinery</h4>
          <h4 className='h4'>To access the Refinery you will need to use the login details you received by email
           when you purchased the course or by a member of Professional Academy Head Office.</h4>
           <h4 className='h4'>If you have since forgotten your updated password, please use the Forgotten password link and put the email address
           linked to your profile in the email field only.</h4>
           <div>
           <h4 className='h4 highlight'>Important Notice to Learners</h4>
           <h4 className='h4'>Using Al as means of writing assignments is academic fraud. All of the awarding bodies are vigilant of 
            the misuse of Al so ensure you are aware of your awarding body's rules regarding Al</h4>
            </div>


          
          


          </div>

        </div>
        <div className='slideshow'>
        <ImageCarousel/>



        </div>
      </div>
      
      
      
       </div>
  )
}

export default IndexPage