function NavBar({pokemonIndex, setPokemonIndex, pokemonListLength}) {
    const handleClick = (e) => {
        if(e.target.id === 'prev') setPokemonIndex(pokemonIndex - 1);
        if(e.target.id === 'next') setPokemonIndex(pokemonIndex + 1);
    }

    return (
        <div>
            {pokemonIndex > 0 && <button onClick={handleClick} id='prev'>Précédent</button>}
            {pokemonIndex < pokemonListLength - 1 && <button onClick={handleClick} id='next'>Suivant</button>}
        </div>
    )
}

export default NavBar;