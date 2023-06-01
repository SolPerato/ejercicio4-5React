import ListGroup from 'react-bootstrap/ListGroup';
import ItemTareas from './ItemTareas';

const ListaTareas = ({propTareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                propTareas.map((tarea, indiceTarea)=><ItemTareas propTarea={tarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemTareas>)
            }
            
        </ListGroup>
    );
};

export default ListaTareas;