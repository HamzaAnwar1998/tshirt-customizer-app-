import React from 'react'
import {useDrag} from 'react-dnd'

export const IndividualArt = ({individualArt}) => {
    // console.log(individualArt.urls.full)    
    const [{isDragging}, drag]=useDrag(()=>({
        type:'div',
        item:{id:individualArt.id},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <>
            <div className='images' style={{border: isDragging ? '3px solid #f92c0f':'0px'}}
                    ref={drag}>
                <img src={individualArt.urls.full}/>
            </div>
        </>
    )
}
