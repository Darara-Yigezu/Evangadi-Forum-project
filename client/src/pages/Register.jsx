import {useRef} from 'react';
import axios from '../axiosConfig';
import {useNavigate} from 'react-router-dom';

function Register() {
  const  navigate = useNavigate();
  const usernameDom=useRef()
  const firstnameDom=useRef()
  const lastnameDom=useRef()
  const emailDom=useRef()
  const passwordDom=useRef()

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await axios.post('users/register',{
        username:usernamevalue,
        firstname:firstnamevalue,
        lastname: lastnamevalue,
        email:emailvalue,
        password:passwordvalue
      });
      alert("registered successfully.please login")
      navigate( "/login");
    } catch (error) {
      alert("something went wrong")
      console.log(error.response)
      
    }
    
    const usernamevalue=usernameDom.current.value;
    const firstnamevalue=firstnameDom.current.value;
    const lastnamevalue=lastnameDom.current.value;
    const emailvalue=emailDom.current.value;
    const passwordvalue=passwordDom.current.value;
    if(
      !usernamevalue ||
      !firstnamevalue ||
      !lastnamevalue ||
      !emailvalue ||
      passwordvalue
    ){
      alert("Please fill out all fields")
      return ;
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
        <span>username:---</span>
        <input ref={usernameDom}
        type='text' 
        placeholder='username' />
        </div>
        <br/>
        <div>
          <span>first name:---</span>
          <input ref={firstnameDom} 
          type='text' 
          placeholder='first name' />
        </div>
        <br />
        <div>
          <span>last name:---</span>
          <input ref={lastnameDom} 
          type='text' 
          placeholder='last name' />
        </div>
        <br />

        <div>
          <span>email:---</span>
          <input ref={emailDom} type='email' placeholder='email' />
        </div>
        <br /> 

        <div>
          <span>password</span>
          <input ref={passwordDom} 
          type='password' 
          placeholder='password' />
        </div>

        <button type='submit'>Register</button>
      </form>
    </section>
  )
}
export default Register;
