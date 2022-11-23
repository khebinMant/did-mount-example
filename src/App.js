import React from 'react'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  //Cuando el componente se desmonta como el return en un useEffet
  componentWillUnmount() {
    //Cuando se desmonta no quiero guardar el estado con los pokemos lo limpio
    this.setState({pokemons:[]})
  }

  //Cuando el componente se monta como un useEffect
  componentDidMount() {
    //Cuando se monta quiero cargar datos de una API
    this._getPokemons();
  }
  render() {
    return (
      <>
      <p>hola</p>
        {
          this.state.pokemons.map(pokemon=>(
            <p key={pokemon.name}>{pokemon.name}</p>
          ))
        }
      </>
    )
  }

   async _getPokemons () {
    //Buscar pokemons de la API de pokemons
    //componentDidMount es como useEffect pero con react usando clases
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1')
    const data = await resp.json();
    this.setState({pokemons:data.results})
  }
}



