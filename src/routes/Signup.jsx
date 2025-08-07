import React, { useState } from "react";
import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState();
    return(
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col items-center mb-6">
                    <Notebook className="h-12 w-12 text-indigo-600 mb-2" />
                    <h2 className=" ">Welcome to QuickNotes</h2>
                    <p>Create an account for free</p>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                            <input type="email"
                                   id="email"
                                   value={email}
                                   placeholder="example@email.com"
                                   required
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                            <input type="password"
                                   id="password"
                                   value={password}
                                   placeholder="*********"
                                   required
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password:</label>
                            <input type="confirm-password"
                                   id="password"
                                   value={confirmPassword}
                                   placeholder="*********"
                                   required
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <button className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4" type="submit">Create Account</button>
                    </form>

                    <div>
                        <p className="text-gray-600">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;