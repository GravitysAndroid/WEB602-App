import React from 'react'
import loginImage from './login.png'

export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    //rendering the actual form for the user to input into
     render(){
         return <div className='base-container'>
             <div className='header'>Login</div>
             <div className='content'>
                <div className='image'>
                    <img src={loginImage} alt=''/>
                </div>
                <div className='form'>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>  
                      <input type="text" name='username' placeholder='username'/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>  
                      <input type="password" name='password' placeholder='password'/>
                    </div>
                </div>
             </div>
             <div className="footer">
                 <button className="btn" type='button'>
                     Login
                 </button>
             </div>
         </div>         
     }   
}