function NavBar({setPokemonIndex, pokemonList}) {
    const handleClick = (pokemon) => {
        setPokemonIndex(pokemonList.indexOf(pokemon))
        
        pokemon.name === "pikachu" && alert("pika pikachu !!!");    // 08bis
    }

    return (
        <div>
            {pokemonList.map((pokemon) => (
                <button key={pokemon.name} onClick={() => handleClick(pokemon)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    )
}

export default NavBar;