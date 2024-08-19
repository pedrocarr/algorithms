import { Pokemon } from "../types/pokemon";

const getPokemonId = (url: string) => {
  const segments = url.split('/');
  const id = segments[segments.length - 2];
  return id
}

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = getPokemonId(pokemon.url)
  return (
    <div className='text-center text-3xl'>
      {pokemon.name}
      <div className='mt-2'>
        {pokemon.url}
      </div>
      <div className='flex justify-center items-center'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} width={400} height={400} alt={pokemon.name}/>
      </div>
    </div>
  )
}
