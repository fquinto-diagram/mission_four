export function usePokemon(type: string){
  const colors: Record<string, string> = {
    normal: 'bg-gray-400 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    fire: 'bg-red-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    water: 'bg-blue-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    electric: 'bg-yellow-400 text-black justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    grass: 'bg-green-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    ice: 'bg-blue-200 text-black justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    fighting: 'bg-red-700 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    poison: 'bg-purple-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    ground: 'bg-yellow-600 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    flying: 'bg-indigo-400 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    psychic: 'bg-pink-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    bug: 'bg-lime-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    rock: 'bg-yellow-800 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    ghost: 'bg-purple-700 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    dragon: 'bg-indigo-700 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    dark: 'bg-gray-800 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    steel: 'bg-gray-500 text-white justify-center mx-autp my-2 ml-2 px-3 rounded-2xl',
    fairy: 'bg-pink-300 text-black justify-center mx-autp my-2 ml-2 px-3 rounded-2xl'
  }
  
  return colors[type] || 'bg-gray-400 text-white'
}