import { CiCircleRemove,CiEdit } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Task = ({ item, excluirTarefa }) => {
    return (
      <Card>
        <Card.Header>{item.title}</Card.Header>
        <Card.Body>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary"><CiEdit /></Button>
          <Button onClick={excluirTarefa} variant="danger"><CiCircleRemove /></Button>
        </Card.Body>
      </Card>
    );
  };
  
  export default Task;