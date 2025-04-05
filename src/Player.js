import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
        <Card style={{ width: "18rem", margin: "10px", textAlign: "center", backgroundColor: "yellow" }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Équipe: {team} <br />
                    Nationalité: {nationality} <br />
                    Numéro: {jerseyNumber} <br />
                    Âge: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

// Définition des props par défaut
Player.defaultProps = {
    name: "Joueur inconnu",
    team: "Équipe inconnue",
    nationality: "Nationalité inconnue",
    jerseyNumber: "--",
    age: "--",
    image: "https://example.com/default.jpg",
};

export default Player;
