import { Irish_Grover } from "next/font/google";
import styles from "./navbar.module.css";
import Link from "next/link";

const irishGrover = Irish_Grover({
    weight: '400',
    subsets: ["latin"]
});

export default function Navbar() {
    
    return (
        <header className={styles.header}>
            <span className={`${styles.span} ${irishGrover.className}`}>
                Rick and Morty
            </span>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/characters">Personajes</Link>
                    </li>
                    <li>
                        <Link href="/locations">Ubicaciones</Link>
                    </li>
                    <li>
                        <Link href="/episodes">Episodios</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}