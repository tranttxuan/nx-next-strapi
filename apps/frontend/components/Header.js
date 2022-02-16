import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

function Header() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const goBack = (event) => {
        event.preventDefault();
        router.back()
    }
    const {user} = useContext(AuthContext);
console.log(user, user?.email)
    return (
        <div className="relative flex justify-center">
            {!isHome && <a href="#" onClick={goBack} className="absolute -left-14 cursor-pointer">{"<"} Back</a>}
            <div className="text-4xl text-blue-800 font-bold">
                <Link href="/">
                    <a>The E-Commerce</a>
                </Link>
            </div>
            <div className="absolute -right-14 cursor-pointer">
                {user ? <Link href="/account"><a className="italic">{user.email}</a></Link> : <Link href="/login"><a>Log in</a></Link>}
            </div>
        </div>
    )
}

export default Header
