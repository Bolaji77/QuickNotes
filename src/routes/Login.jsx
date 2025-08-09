import React, { useState } from "react";
import { Notebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        if(!email || !password){
           return setError("Please input all fields");
        }
        if(password.length < 6){
            return setError("Password must contain atleast 6 characters");
        }
        try{
            setLoading(true);
            await login(email, password);
            navigate("/dashboard");
        }catch(err){
            setError('Failed to login: ' + (err.message || "Please try again"));
        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col items-center mb-6">
                    <Notebook className="h-12 w-12 text-indigo-600 mb-2" />
                    <h2 className=" ">Welcome Back!</h2>
                    <p>Sign in to access your notes</p>

                    {
                    error && (<div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
                        {error};
                        ;
                        
                    </div>)
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                            <input type="email"
                                   id="email"
                                   value={email}
                                   onChange={(e)=>setEmail(e.target.value)}
                                   placeholder="example@email.com"
                                   required
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                            <input type="password"
                                   id="password"
                                   value={password}
                                   onChange={(e)=>setPassword(e.target.value)}
                                   placeholder="password"
                                   required
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <button className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4" type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"}</button>
                    </form>

                    <div>
                        <p className="text-gray-600">Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;