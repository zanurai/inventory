import React from 'react'

function ConfirmDelete({ item, onConfirm, onCancel }) {//itemDetails bata aako props item details yesko parent ho
    const hamdleConfirm = (e) => {
        e.preventDefault()
        onConfirm(item._id)
    }

    const hamdleCancel = (e) => {
        e.preventDefault()
        onCancel(item._id)
    }
    return (
        <div>
            <p>Are you sure you want to delete this item?</p>
            <p>Name:{item.name}</p>
            <p>Description:{item.description}</p>
            <p>Price:{item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <button type="button" onClick={hamdleConfirm}>Yes,Delete</button>
            <button type="button" onClick={hamdleCancel}>Cancel</button>
        </div>
    )
}

export default ConfirmDelete
