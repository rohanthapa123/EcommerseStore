import axios from "axios"

export const getProducts = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products")
    const data = await response.data;
    return data;
}

export const getProduct = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products/1')
    const data = await response.data;
    return data;
}
export const getProductById = async (id) =>{
    const response = await axios.get('https://fakestoreapi.com/products/'+id)
    return response;
}
export const getLimitedProducts = async (limit) =>{
    console.log(limit)
    return await axios.get("https://fakestoreapi.com/products?limit="+limit)
}