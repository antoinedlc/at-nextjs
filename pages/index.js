import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import { gql } from '@apollo/client'
import { getApolloClient } from './api/apolloClient'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(false)

    async function handleSearch(e) {
        let search = e.target.value
        let charactersData = await searchApi(search)
        setCharacters(charactersData)
    }

    async function searchApi(search) {
        const apolloClient = getApolloClient()
    
        const data = await apolloClient.query({
            query: gql`
                {
                    characters(filter: { name: "${search}" }) {
                        info {
                            count
                        }
                        results {
                            name,
                            status,
                            image,
                            id
                        }
                    }
                }
            `
        })

        let characters = await data?.data.characters.results

        if(characters) {
            return characters
        } else {
            setError(true)
        }
    }

    return (
        <div className={styles.SearchContainer}>
            <div className={styles.SearchForm}>
                <input type="text" placeholder="Search..." onChange={handleSearch} />
            </div>
            <div className={styles.SearchResults}>
                {!error
                    ?
                        characters && characters.map((character) => {
                            return <CharacterCard {...character} key={`character-card-${character.id}`} />
                        })
                    :
                        <span>No results found...</span>
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}