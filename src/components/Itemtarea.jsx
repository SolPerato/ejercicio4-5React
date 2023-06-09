import { Button, ListGroupItem } from "react-bootstrap";

const ItemTareas = ({propTarea, borrarTarea}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            {propTarea}
            <Button variant="danger" onClick={()=>borrarTarea(propTarea)}>Borrar</Button>
            </ListGroupItem>
    );
};

export default ItemTareas;