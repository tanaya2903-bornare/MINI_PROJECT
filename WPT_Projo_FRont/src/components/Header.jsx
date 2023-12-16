import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return (
        <Container className="mt-82">
            <Alert variant="success">
                <h6>{props.text}</h6>
            </Alert>
        </Container>
    );
}
