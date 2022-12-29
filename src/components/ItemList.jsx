import { FaTrashAlt } from 'react-icons/fa'
import LineItem from './LineItem'

function ItemLists({ items, handleChange, handleDelete }) {

    return (
        <ul>
            {items.map(item => <LineItem  handleChange={handleChange} item={item} handleDelete={handleDelete} key={item.id}/>)}
        </ul>
    )
}

export default ItemLists