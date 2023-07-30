import React, { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'
import { useParams } from 'react-router-dom';
import { getItemById } from '../srcapi/Api'

const ItemDetailsPage = () => {
    const [myItem, setMyItem] = useState({});
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getItemById(id);
                console.log(data);
                setMyItem(data)
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <ItemDetails item={myItem} />{/*item props pathaira itemDetails chaildlai*/}
        </div>
    )
}

export default ItemDetailsPage
