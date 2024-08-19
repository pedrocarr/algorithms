import { useEffect, useState } from 'react'
import { Pokemon } from '../types/pokemon'
import { PokemonCard } from '../components/PokemonCard'

// async function fecthImages(url: string): Promise<Sprites> {
//   const result = await fetch(url)

//   const data = await result.json()

//   const { sprites } = data

//   return sprites
// }

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      {isLoading && (
        <div>... is Loading</div>
      )}
      {/* <button onClick={()=> setPage(page + 1)}>Next page: ({page})</button> */}
      {pokemons.map((pokemon, idx) => {
        return <PokemonCard key={idx} pokemon={pokemon} />
      })}
    </div>
  )

}


