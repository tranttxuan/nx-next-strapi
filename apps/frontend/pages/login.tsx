import AuthContext from 'apps/frontend/context/AuthContext'
import Head from 'next/head';
import React, { useContext, useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");

    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email);
    }

    return (
        <div className="flex flex-col items-center my-10 space-y-10">
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to make your purchase" />
            </Head>
            <h2 className="font-bold text-2xl">Login</h2>
            <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={event => setEmail(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
