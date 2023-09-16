
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Assets/Global.css'
import { useDispatch , useSelector } from 'react-redux';
import { loginUser } from '../Thunk/Actions/LoginAction';


const LoginPop = ({onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const { loading } = useSelector((state) => state.product);

    const dispatch = useDispatch();

      

    const handleSubmit = async(e) => {
        
        e.preventDefault();
       const success = await dispatch(loginUser(username, password))
       console.log(success)
       if(!loading){
        if (success) {
            onClose(); // Close the popup on successful login
          } else {
            setLoginError(true);
          }

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
        <Button style={{alignItems:"center"}}type="submit">Login</Button>
        
    </form>
</div>
)
}

export default LoginPop