import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteItem } from '../srcapi/Api'
import ConfirmDelete from './ConfirmDelete';
const ItemDetails = (props) => {//props pass from itemDetailspage
    console.log(props.item)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        await deleteItem(id);
        navigate('/')
    }

    if (!props.item) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className='details-container'>
                <h2>Item Details</h2>
                <div className="details">
                    <p>Name:{props.item.name}</p>
                    <p>Description:{props.item.description}</p>
                    <p>Price:{props.item.price}</p>
                    <p>Quantity:{props.item.quantity}</p>
                    {/* <Link to={`/items/${props.item.id}/edit`}>Edit</Link> */}
                    <button type="button" onClick={() => setShowConfirmation(true)}>Delete</button>
                    {showConfirmation && (
                        <ConfirmDelete item={props.item} onConfirm={handleDelete} onCancel={() => setShowConfirmation(false)} />//confirmDeletelai props pass gareko xa
                    )}

                    <div className='back-to-go'>
                        <Link to="/">Back to List</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetails
