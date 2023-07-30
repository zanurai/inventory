import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/inventory'

export const getAllItems = async () => {
    try {
        const res = await axios.get(`${BASE_URL}`)
        //console.log(res)
        return res.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getItemById = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/${id}`)
        //console.log(res)
        return res.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const createNewItem = async (item) => {
    try {
        const res = await axios.post(`${BASE_URL}`, item)
        //console.log(res)
        return res.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}
export const updateNewItem = async (_Id, itemData) => {
    try {
        // const res = await axios.put(`${BASE_URL}/${itemId}`, itemData)
        const res = await axios.put(`${BASE_URL}/${_Id}`, itemData)//itemData parameter represents the data that i want to update for a specific item. 
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const deleteItem = async (_Id) => {
    try {

        await axios.delete(`${BASE_URL}/${_Id}`)
    } catch (err) {
        console.error(err);
        throw err;
    }
}