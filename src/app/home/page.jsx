import { Irish_Grover } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";

const irishGrover = Irish_Grover({
    weight: '400',
    subsets: ["latin"]
});

export default function HomePage() {

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h1 className={`${styles.h1} ${irishGrover.className}`}>
                    Rick and Morty
                </h1>
                <div className={styles.divContainer}>
                    <div className={styles.containerImg}>
                        <Image
                            src="/rick-and-morty.webp"
                            width={400}
                            height={400}
                            className={styles.img}
                            alt="Rick and Morty"
                        />
                    </div>
                    <div className={styles.content}>
                        <text className={styles.description}>Rick and Morty es una serie de animación para adultos creada por Justin Roiland y Dan Harmon. La serie sigue las aventuras de Rick Sanchez, un científico alcohólico y excéntrico, y su nieto Morty Smith, mientras viajan a través del tiempo y el espacio en locas y peligrosas aventuras interdimensionales.</text>
                    </div>
                </div>
            </div>
        </div>
    )
}