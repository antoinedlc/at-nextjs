import { useSelector } from 'react-redux'
import styles from './Cart.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Cart(){
    // je récupère du store l'attribut "characters" de la slice "cart"
    const characters = useSelector((state) => state.cart.characters)

    // Je définis une variable d'état pour gérer l'ouverture/fermeture du panier
    let [isOpened, setIsOpened] = useState(false)

    function toggleCart() {
        setIsOpened(!isOpened)
    }

    return (
        <div className={`${styles.Cart} ${isOpened ? styles.CartOpened : ''}`}>
            <span className={styles.CartOpen} onClick={() => {toggleCart()}}></span>
            <span className={styles.CartClose} onClick={() => {toggleCart()}}></span>
            {characters &&
                characters.map((character, index) => {
                    return (
                        <div className={styles.CartCard} key={`cart-card-${index}`}>
                            <div className={styles.CartCardImage}>
                                <Image src={character.image} layout="fill" objectFit="cover" objectPosition="top center" />
                            </div>
                            <div className={styles.CartCardInfos}>
                                <span className={styles.CartCardInfosTitle}>{character.name}</span>
                                <span className={styles.CartCardInfosQuantity}>Quantity : <b>{character.quantity}</b></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}