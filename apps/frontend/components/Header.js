import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const goBack = (event) => {
        event.preventDefault();
        router.back()
    }
    return (
        <div className="relative flex justify-center">
            {!isHome && <a href="#" onClick={goBack} className="absolute -left-14 cursor-pointer">{"<"} Back</a>}
            <div className="prose prose-xl font-extrabold ">
                <Link href="/">
                    <a>The E-Commerce</a>
                </Link>
            </div>
        </div>
    )
}

export default Header
