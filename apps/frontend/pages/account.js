import Head from 'next/head'
import Link from 'next/link';
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Account() {
    const {user, logoutUser} = useContext(AuthContext);
    if(!user){
        return(
            <div>
                <p>Please login or register</p>
                <Link href="/login"><a>Go to login</a></Link>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center my-10 space-y-10">
            <Head>
                <title>Account page</title>
                <meta name="description" content="The account page, view your account" />
            </Head>
            <h2 className="text-bold text-2xl">Account page</h2>
            <a href="#" onClick={logoutUser}>Logout</a>
        </div>
    )
}

export default Account
