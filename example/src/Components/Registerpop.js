
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Assets/Global.css'
import { useDispatch , useSelector } from 'react-redux';
import { registerUser } from '../Thunk/Actions/RegisterAction';
import * as Yup from 'yup';


const RegisterPop = ({onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const { loading } = useSelector((state) => state.product);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        // email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmpassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm password is required'),
      });


    const dispatch = useDispatch();

      

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        try {
            await validationSchema.validate({ username, password, confirmpassword }, { abortEarly: false });
        
            const success = await dispatch(registerUser(username, password));
        
            if (!loading) {
              if (success) {
                 onClose(); // Close the popup on successful registration
              } else {
                setLoginError(true);
              }
            }
          } catch (errors) {
            // Handle validation errors here
            console.error(errors);
            alert('Validation failed. Please check your input.');
          }
        

       
       
}
return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='pop'>
        
            <TextField
                type="text"
                label="UserName"
                size="medium"
                id="username"
                value={username}
                error={loginError}
                className="custom-input" 
   
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            
            <TextField
                type="password"
                label="Password"
                id="password"
                size="medium"
                value={password}
                className="custom-input" 
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <TextField
                type="password"
                label="Confirm Password"
                id="confirmpassword"
                size="medium"
                value={confirmpassword}
                className="custom-input" 
                onChange={(e) => setconfirmPassword(e.target.value)}
            />
   
        <Button style={{alignItems:"center"}}type="submit">Register</Button>
    </form>
</div>
)
}

export default RegisterPop