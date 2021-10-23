import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSzTJs4mbOXbY5wTQ1HmVBDunHUzJGfdI",
    authDomain: "auth-react-f84fa.firebaseapp.com",
    projectId: "auth-react-f84fa",
    storageBucket: "auth-react-f84fa.appspot.com",
    messagingSenderId: "650744173375",
    appId: "1:650744173375:web:f99f93e48f594a1cf7798a"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <React.Fragment>
            <p>Login</p>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
            </form>
        </React.Fragment>
    )

}