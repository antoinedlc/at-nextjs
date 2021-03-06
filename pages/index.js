import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import { gql } from '@apollo/client'
import { getApolloClient } from './api/apolloClient'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
    /*
      Je créé une variable d'état appellée "characters"
      Je désigne "setCharacters()" comme la fonction permettant d'éditer la variable
      Je définit "[]" comme étant la valeur initiale de "characters"
  
      const [variable, fonctionVariable()] = useState(valeurInitiale)
    */
    const [characters, setCharacters] = useState([])

    // Handle search peut être vue comme une méthode du composant, une fonction interne qui lui est propre
    async function handleSearch(e) {
        // Je récupère la velue de l'élément ayant déclenché la fonction
        let search = e.target.value
    
        // J'effectue une requête asynchrone
        let charactersData = await searchApi(search)
    
        // J'assigne à "characters" le tableau d'objets (= personnages correspondants) retourné par l'API
        setCharacters(charactersData)
    }

    async function searchApi(search) {
        const apolloClient = getApolloClient()
    
        const data = await apolloClient.query({
            query: gql`
                {
                    characters(filter: { name: "${search}" }) {
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
                {/* En cas de changement du champs de rehcerche, je fais appel à une fonction interne au composant */}
                <input type="text" placeholder="Search..." onChange={handleSearch} />
            </div>
            <div className={styles.SearchResults}>
                {/*
                    Ici, le code dépend de la variable d'état "characters"
                    De ce fait, chaque modification de la variable entraînera un re-render de ce morceau de code
                    Le reste de la page, quant à lui, restera tel quel
                    Les variables d'états permettent donc de dynamiser des parties précises d'un layout et de ne pas re-render toute la page à chaque fois
                */}
                {characters &&
                    characters.map((character) => {
                        return <CharacterCard {...character} key={`character-card-${character.id}`} />
                    })
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