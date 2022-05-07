import React from 'react';
import GetPokemon from './Pokemon'

export default class CreatePokedex extends React.Component {
    render() {
        const { data } = this.props
        return (
            <>
             {data.map((element) => ( 
                <GetPokemon key = { element.name } poke = { element } />
            ) )}
            </>
        )
    }
}

