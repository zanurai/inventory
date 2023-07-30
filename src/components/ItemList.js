import React, { useEffect, useState } from 'react'
import { getAllItems } from '../srcapi/Api'
import { Link } from 'react-router-dom';


const ItemList = () => {
    const [items, setItems] = useState([])
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])
    useEffect(() => {
        const fetchItem = async () => {
            const items = await getAllItems();
            //console.log(items);
            setItems(items)
        }
        fetchItem();
    }, []);
    return (
        <>
            <div className={`navbar-container ${isScrolled ? 'blur' : ''}`}>
                <h3>Inventory</h3>

                <Link to={{ pathname: "/items/new" }} >Add Items</Link>

            </div >
            <div className={`inventory-header ${isScrolled ? 'blur' : ''}`}>
                <h1>Inventory</h1>
                <div className='inventory-container'>
                    {items.length > 0 ? (//for loading
                        items.map((item) => (
                            <div key={item._id}>
                                <img src={item.image_url} alt={item.title} />
                                <h6>{item.title}</h6>

                                <p>{item.name}</p>
                                {item.description.length > 50 ? (
                                    <p>{item.description.slice(0, 50)}...</p>
                                ) : (
                                    <p>{item.description}</p>
                                )}

                                <p>{item.Quantity}</p>
                                <p>{item.price}</p>
                                <div className='link'>
                                    <Link to={`/items/${item._id}`} >Detials</Link>
                                    <Link to={`/items/${item._id}/edit`}>Edit</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}

                </div >
            </div>
        </>
    )
}

export default ItemList