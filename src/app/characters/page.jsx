'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import instance from "@/utils/axios";
import Image from "next/image";

export default function CharacterPage() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            const response = await instance.get("/character");
            setCharacters(response.data.results);
        } catch (error) {
            console.log("Error al obtener los personajes: ", error);
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h2 className={styles.subtitle}>Listado de personajes</h2>
                <ul className={styles.ul}>
                    {characters.map((character) => (
                        <div key={character.id} className={styles.flipCard}>
                            <div className={styles.flipCardInner}>
                                <Image
                                    src={character.image}
                                    width={300}
                                    height={300}
                                    className={styles.flipCardFront}
                                    alt="Rick and Morty"
                                />

                                <div className={styles.flipCardBack}>
                                    <li className={styles.name}>{character.name}</li>
                                    <Image
                                        src={character.image}
                                        width={100}
                                        height={100}
                                        className={styles.imgCharacter}
                                        alt="Rick and Morty"
                                    />
                                    <div className={styles.description}>
                                        <li className={styles.gender}>Género: {character.gender}</li>
                                        <li className={styles.status}>Status: {character.status}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}