
import React, { useState } from 'react'
import { createNewItem } from '../srcapi/Api';
import { useNavigate } from 'react-router-dom';

const NewItemPage = () => {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState(null);
    // const location = useLocation()
    // const addItem = location.state?.addItem
    const navigate = useNavigate()
    const [error, setError] = useState(null)




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !price) {
            setError('All fields are required')
            return;
        }
        const now = new Date()
        const newItem = {
            title: String(title),
            name: String(name),
            description: String(description),
            price: Number(price),
            quantity: Number(quantity),
            created_at: now,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-L8UDHeZ9gr99T7VLZ57npZtT8GcNbJfyrQ&usqp=CAU"
        };
        // console.log(newItem)
        // const formData = new FormData()
        // console.log(formData)
        // formData.append('image', image);
        // formData.append('title', String(title));
        // formData.append('name', String(name));
        // formData.append('description', String(description));
        // formData.append('price', Number(price));
        // formData.append('quantity', Number(quantity));
        // formData.append('created_at', now);

        // console.log("test2", formData)

        try {
            const newItem2 = await createNewItem(newItem)
            console.log(newItem2)
            //addItem && addItem(createNewItem)
            navigate('/');
        } catch (error) {
            console.log('Error creating the item.', error);
        }

    }
    const handleImageChange = (e) => {
        setImage(e.target.files[0])//file uploadko lagi

    }
    return (
        <>
            <div className='newitem-header'>
                <h2>Add New Item</h2>
                <div className='newitem-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title:</label>
                            <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>Description:</label>
                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className='from-group'>
                            <label htmlFor='price'>Price:</label>
                            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className='from-group'>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className='from-group'>
                            <label htmlFor='image'>Image:</label>
                            <input type="file" id='image' name="image" accept="image/*" onChange={handleImageChange} />
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default NewItemPage