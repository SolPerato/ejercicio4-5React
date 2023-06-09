import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './Itemtarea';

const ListaTareas = ({propTareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                propTareas.map((tarea, indiceTarea)=><ItemTarea propTarea={tarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemTarea>)
            }
            
        </ListGroup>
    );
};

export default ListaTareas;