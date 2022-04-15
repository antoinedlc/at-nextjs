import Link from 'next/link'
import Cart from '../Cart/'
import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <span className={styles.navLogo}>R&M</span>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" passHref>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" passHref>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
            <div></div>
            <Cart />
        </nav>
    )
}