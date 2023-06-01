import { Form , Button} from "react-bootstrap";
import Listatareas from "./Listatareas";

const FormularioTareas = () => {
    return (
    <>
       <Form>
        <Form.Group className="mb-3 d-flex" controlId="Tareas">
          <Form.Control type="text" placeholder="ingrese tarea" />
          <Button>Agregar</Button>
        </Form.Group>
        
      </Form>
      <Listatareas></Listatareas>
    </>
    
    );
};

export default FormularioTareas;