import React from 'react';

export default function Login() {
    return (
        <div>
            <form>
                <label>User Name
                    <input type='text' placeholder='User Name'/>
                </label>
                <label>Password
                    <input type='password' placeholder='Password'/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
