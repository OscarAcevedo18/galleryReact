import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
    return (
    <Card style={{ width: '18rem', backgroundColor:"#2043cdb4" }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
        {props.description}
    </Card.Text>
    <Button variant="danger" >Conoce más Aquí</Button>
    </Card.Body>
    </Card>
    );
}

export default Cards;

