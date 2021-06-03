import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <React.Fragment>

                <Card>
                    <link rel='stylesheet' href='/css/style.css' />

                    <Figure.Caption style={{ width: '30%' }}>
                        <Image src="./img/logo-DH.png" className="img" />
                    </Figure.Caption>
                    <h1>Digital Movies</h1>
                    <p>Bienvenidos a Digital Movies</p>
                    <p><Link to="/Peliculas">Listado de Películas</Link></p>
                    <p><Link to="/Generos">Listado de Generos</Link></p>

                </Card>
            </React.Fragment>
        );

    }
}

export default Home;