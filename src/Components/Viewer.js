import React,{useState} from 'react'
import { Icon } from 'react-icons-kit'
import {undo} from 'react-icons-kit/icomoon/undo'
import {redo} from 'react-icons-kit/icomoon/redo'
import front from '../images/front.png'
import back from '../images/back.png'
import {zoomIn} from 'react-icons-kit/feather/zoomIn'
import {useDrop} from 'react-dnd'

export const Viewer = ({art}) => {
    
    // console.log(art); //got the data here

    const [image, setImage]=useState(front);   
    
    const [droppedImages, setDroppedImages]=useState([]);    

    const [{isOver}, drop]=useDrop(()=>({
        accept:'div',
        drop:(item)=>addImageToShirt(item.id),
        collect:(monitor)=>({
            isOver: !!monitor.isOver()
        })
    }),[art])

    const addImageToShirt=(id)=>{
        console.log(id);  // got the id       
        const pictureList=art.filter(newArt=>id===newArt.id);
        console.log(pictureList); // got the array       
        setDroppedImages((droppedImages)=>[...droppedImages,pictureList[0]]);
    }    

    return (
        
        <div className='viewer-box'>            
            <div className='undo-redo-box'>
                <div className='box'>
                    <div className='icon'>
                        <Icon icon={undo} size={22}/>
                    </div>
                    <div className='text'>undo</div>
                </div>
                <div className='box disabled'>
                    <div className='icon'>
                        <Icon icon={redo} size={22}/>
                    </div>
                    <div className='text'>redo</div>
                </div>
            </div>
            
            <div className='img' ref={drop}
            >
                <img src={image}/>
                <div className='absolute-div'
                style={{border: isOver ? '3px solid #6db5e7':'0px'}}>
                    <>{droppedImages.map(img=>(
                        <div key={img.id} className='art-img'>
                            <img src={img.urls.full}/>
                        </div>
                    ))}</>
                </div>
            </div>
            <div className='functionalities-box'>
                <div className='box' onClick={()=>setImage(front)}>
                    <div className='icon-img'>
                        <img src={front}/>
                    </div>
                    <div className='text active'>Front</div>
                    {image===front&&(<div className='underline'></div>)}
                </div>
                <div className='box' onClick={()=>setImage(back)}>
                    <div className='icon-img'>
                        <img src={back}/>
                    </div>
                    <div className='text'>Back</div>
                    {image===back&&(<div className='underline'></div>)}
                </div>
                <div className='box'>
                    <div className='icon'>
                        
                    </div>
                    <div className='text active'>Sleeve Design</div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <Icon icon={zoomIn} size={22}/>
                    </div>
                    <div className='text active'>Zoom</div>
                </div>
            </div>
        </div>
    )
}
