import React, {useEffect} from "react";
import axios from 'axios';
import {useLocation, useNavigate, useParams} from 'react-router-dom'

function Furnitures(){
    const {id} = useParams()
    

    useEffect(()=>{
        axios.get(`http://localhost:9292/furnitures/${id === "table" ? 1 : (id === "chair" ? 2 : (id === "sofa" ? 3 : null))}`)
        .then(data => {
            console.log(data.data)
        })
    },[])

    return (
        <div></div>
    )
}

export default Furnitures;