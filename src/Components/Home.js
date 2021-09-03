import React,{useState} from 'react'
import { Controllers } from './Controllers'
import { Viewer } from './Viewer'
import axios from 'axios'
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const Home = () => {

    const [art, setArt]=useState([])   
   
    const fetchArt=async()=>{
        const res = await axios.get('https://api.unsplash.com/photos/?client_id=6PTwdXbHvJktVaOjlXJevpv0LJhpuhA5gE36W6DsJkA');
        const data = await res.data;
        // console.log(data);
        setArt(data);
    }

    // console.log(art);   // got the data here
   
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='wrapper'>
                <div className='main-box'>
                    <Controllers fetchArt={fetchArt} art={art}/>                   
                    <Viewer art={art}/>             
                </div>
            </div>
        </DndProvider>        
    )
}
