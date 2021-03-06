import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Tarjeta from './Tarjeta';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'



class Generos extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            db: [],
        });

    }

    componentDidMount() {
        this._isMounted = true;
        this.getGeneros();
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getGeneros() {
        fetch('http://localhost:3001/genres')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ db: responseJson });
            });

    }

    render() {
        console.log(this.state.db)
        const Generos = this.state.db.map((genero, i) => {
            return (
                <Tarjeta key={genero.id} id={genero.id} name={genero.name} lista='generos'></Tarjeta>

            )
        })
        return (<React.Fragment>
            <Container fluid="md" >
                <link rel='stylesheet' href='/css/style.css' />
                <Figure.Caption style={{ width: '30%' }}>
                    <Image src="./img/logo-DH.png" className="img" />
                </Figure.Caption>
                <Col >
                    <link rel='stylesheet' href='/css/style.css' />
                    <h1><b>Listado de Generos</b></h1>
                    <br />
                    <Button className="botonVolver" href="/">
                        Inicio
                    </Button>
                    <br />
                    <br />

                    <ul>
                        {Generos}
                    </ul>
                </Col>
            </Container >
        </React.Fragment>
        );

    }
}

export default Generos;