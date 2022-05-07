import React from 'react';

class GetPokemon extends React.Component {
    
    render() {
        const { poke: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;
        return (
            <article>
                <h5>{name} </h5>
                <h5>{type}</h5>
                <h5>{`Avarage Weight: ${value} ${measurementUnit}`}</h5>
                <img src={image} alt ={name}></img> 
            </article>
        )
    }
}

export default GetPokemon