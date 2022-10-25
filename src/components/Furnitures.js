import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useLocation, useNavigate, useParams} from 'react-router-dom'

function Furnitures({setCartItem, cartItem, test}){
    const {id} = useParams()
    const [furnitures, setFurnitures] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:9292/furnitures/${id === "table" ? 1 : (id === "chair" ? 2 : (id === "sofa" ? 3 : null))}`)
        .then(data => {
            setFurnitures(data.data)
        })
    },[])

    const sendToCart = (furniture) => {
        if(cartItem.some(obj => obj.furniture_id === furniture.id)){
            axios.patch(`http://localhost:9292/cart/${furniture.id}`, {
                quantity: 3
            })
            .then(res => console.log(res))
        } else {
            axios.post(`http://localhost:9292/cart`, {
                name: furniture.name,
                furniture_id: furniture.id
            })
            .then(res => setCartItem([...cartItem, res.data]))
        }
    }

    return (
        <div>
            {furnitures.map(furniture => {
                return <div key={furniture.id} onClick={() => {sendToCart(furniture)}}>{furniture.name}</div>
            })}
        </div>
    )
}

export default Furnitures;