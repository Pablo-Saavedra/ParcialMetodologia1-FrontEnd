import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



class Tarjeta extends Component {

    render() {
        //const imagenUrl = "http://localhost:8080/TpReactServer/images/"

        return (

            <React.Fragment>
                <Card >
                    <link rel='stylesheet' href='/css/style.css' />
                    <div className="row no-gutters" >
                    {(this.props.lista === 'peliculas') ? <li><a href={`/DetallePelicula/${this.props.id}`}>{this.props.pelicula}</a></li> : <li>{this.props.name}</li>}
                        
                    </div>
                </Card >
            </React.Fragment >

        );

    }
}

export default Tarjeta;