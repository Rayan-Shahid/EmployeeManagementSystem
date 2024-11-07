import React, { useState } from 'react'
import styled from 'styled-components';

const Login = ({ handleLogin }) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const submitted = (e) => {
        e.preventDefault();
        handleLogin(email, password);

        setemail("")
        setpassword("")

    }


    return (
        <StyledUi>
            <div className='flex h-screen w-screen items-center justify-center'>
                <div className='border-1 border-blue-700'>

                    <form className="form" onSubmit={(e) => {
                        submitted(e)
                    }} >
                        <p className="form-title">Sign in to your account</p>
                        <div className="input-container">
                            <input
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                                required type="email" placeholder="Enter email" autoComplete="current-email" />
                            <span>
                            </span>
                        </div>
                        <div className="input-container">
                            <input
                                value={password}
                                onChange={(e) => {
                                    setpassword(e.target.value)
                                }}
                                required type="password" placeholder="Enter password" autoComplete="current-password" />
                        </div>
                        <button type="submit" className="submit">
                            Sign in
                        </button>


                    </form>

                    {/* </form> */}
                </div>
            </div>
        </StyledUi >
    )
}

export default Login


const StyledUi = styled.div`
/* From Uiverse.io by nathann09 */ 
.form {
  background-color: #e2f0ff;
  display: block;
  padding: 1rem;
  max-width: 450px;
  height: 320px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.5rem;
  padding: 15px;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 400px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 1rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: rgb(99, 175, 219);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}
.submit:hover{background-color: rgb(67, 162, 218);}


`;