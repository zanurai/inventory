import React, { useEffect, useState } from 'react'

import { getItemById, updateNewItem } from '../srcapi/Api'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
const EditItem = () => {
    const [item, setItem] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate()
    const { id } = useParams()
    console.log('id tst:', id);

    useEffect(() => {
        const fetchItem = async () => {

            const item = await getItemById(id);
            console.log(item)
            setItem(item);
            setName(item.name);
            setDescription(item.description);
            setPrice(item.price);
            setQuantity(item.quantity);

        }
        fetchItem();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newItem = { name, description, price, quantity }
        console.log(newItem)
        try {
            await updateNewItem(id, newItem)//newitem obj usr garera provide gareko id sanga itemlai update garxa
            navigate(`/items/${id}`);
        } catch (err) {
            console.log(err);
            alert('Failed to update item')
        }
    };

    if (!item) {
        return <div>
            Loading .....</div>
    }
    return (
        <>
            <div className='edit-container'>
                <h2>Edit Item</h2>
                <div className='Edit-Item'>

                    <form onSubmit={handleSubmit} >
                        <div className="name">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="Description">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className='price'>
                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className='quantity'>
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <button type="submit">Save</button>
                        {item && <Link to={`/`}> Cancle</Link>}

                    </form>
                </div >

            </div>
        </>
    )
}

export default EditItem
