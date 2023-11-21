import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link href="/" className='navLink'>Inicio</Link>
                <Link href="/tienda" className='navLink'>Tienda</Link>
                <Link href="/blog" className='navLink'>Blog</Link>
            </div>
            <div>
                <Link href="/acercaDe" className='navLink'>Acerca de...</Link>
                <Link href="/registrarme" className='navLink'>Registrarme</Link>
            </div>
        </nav>
    )
}

export default Navbar