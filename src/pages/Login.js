import React ,{useState} from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {

    let [signIn, setSignIn] = useState(true);

    return (
        <div className="login-screen">
            <div className="login-container">
                <div className="login-option-container">
                    <div className={signIn ? "login-option login-option-active" : "login-option"}
                        onClick={()=>{setSignIn(true)}}
                    >SIGN IN</div>
                    <div className={signIn ? "login-option" : "login-option login-option-active"}
                         onClick={()=>{setSignIn(false)}}
                    >SIGN UP</div>
                </div>
               {signIn ? 


            <div>
                <div>
                    <div className="input-title">Email</div>
                    <input type="email" className="input-login input-mail"></input>
                </div>
                <div>
                    <div className="input-title">Password</div>
                    <input type="password" className="input-login input-password"></input>
                </div>
                <div>
                    <button className="login-button">SIGN IN</button>
                </div>
            </div>

            :

            <div>
                <div>
                    <div className="input-title">Name</div>
                    <input type="text" className="input-login input-name"></input>
                </div>
                <div>
                    <div className="input-title">Email</div>
                    <input type="email" className="input-login input-mail"></input>
                </div>
                <div>
                    <div className="input-title">Password</div>
                    <input type="password" className="input-login input-password"></input>
                </div>
                <div>
                    <button className="login-button">SIGN UP</button>
                </div>
            </div>


            
        }
            </div>
        </div>
    )
}

export default Login
