import styles from './CharacterCard.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart.reducer'

export default function CharacterCard({id, image, name, status}) {
    let dispatch = useDispatch()

    return (
        <div className={styles.CharacterCard}>
            <div className={`${styles.CharacterCardImage} ${status === 'Dead' ? styles.CharacterCardImageDeceased : ''}`}>
                <Image layout="fill" objectFit="cover" objectPosition="center top" src={image} />
            </div>
            <span className={styles.CharacterCardName}>{name}</span>
            <span className={styles.CharacterCardStatus}>{status}</span>
            {!(status === 'Dead') &&
                <span
                    className={styles.CharacterCardAdd}
                    onClick={
                        () => {
                            dispatch(addToCart({
                                id,
                                image,
                                name,
                                status
                            }))
                        }
                    }
                >
                </span>
            }
        </div>
    )
}