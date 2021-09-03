import React from 'react'
import { Icon } from 'react-icons-kit'
import {type} from 'react-icons-kit/feather/type'
import {image} from 'react-icons-kit/feather/image'
import {uploadCloud} from 'react-icons-kit/feather/uploadCloud'
import {droplet} from 'react-icons-kit/feather/droplet'
import {fileText} from 'react-icons-kit/feather/fileText'
import {tag} from 'react-icons-kit/feather/tag'
import {tshirtOutline} from 'react-icons-kit/ionicons/tshirtOutline'
import { Art } from './Art'
import {ic_search} from 'react-icons-kit/md/ic_search'

export const Controllers = ({fetchArt,art}) => {

    const handleAddArt=()=>{
        fetchArt()
    }   

    return (
        <>
            {art.length < 1&&(<>
                <div className='controllers-box'>
                <div className='controllers-icons'>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={type} size={22}/>
                        </div>
                        <div className='text'>Add Text</div>
                    </div>
                    <div className='box' onClick={handleAddArt}>
                        <div className='icon'>
                            <Icon icon={image} size={22}/>
                        </div>
                        <div className='text'>Add Art</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={uploadCloud} size={22}/>
                        </div>
                        <div className='text'>Upload</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={droplet} size={22}/>
                        </div>
                        <div className='text'>Product Colors</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={tag} size={22}/>
                        </div>
                        <div className='text'>Add Names</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={fileText} size={22}/>
                        </div>
                        <div className='text'>Add Notes</div>
                    </div>
                </div>
                
                <div className='customizer-box'>
                    <h4>How do you want to start?</h4>
                    <div className='icons-text-box'>
                        <div className='box'>
                            <div className='icon'>
                                <Icon icon={type} size={66}/>
                            </div>
                            <div className='text'>Add Text</div>
                        </div>
                        <div className='box' onClick={handleAddArt}>
                            <div className='icon'>
                                <Icon icon={image} size={66}/>
                            </div>
                            <div className='text'>Add Art</div>
                        </div>  
                        <div className='box'>
                            <div className='icon'>
                                <Icon icon={uploadCloud} size={66}/>
                            </div>
                            <div className='text'>Upload</div>
                        </div>  
                        <div className='box'>
                            <div className='icon'>
                                <Icon icon={tshirtOutline} size={66}/>
                            </div>
                            <div className='text'>Change Products</div>
                        </div>                      
                    </div>
                    <div className='startover'>or <span> start over</span></div>
                </div>
                        
            </div>
            </>)}
            {art.length>0&&(<div className='controllers-box'>
            <div className='controllers-icons'>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={type} size={22}/>
                        </div>
                        <div className='text'>Add Text</div>
                    </div>
                    <div className='box active' onClick={handleAddArt}>
                        <div className='icon'>
                            <Icon icon={image} size={22}/>
                        </div>
                        <div className='text'>Add Art</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={uploadCloud} size={22}/>
                        </div>
                        <div className='text'>Upload</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={droplet} size={22}/>
                        </div>
                        <div className='text'>Product Colors</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={tag} size={22}/>
                        </div>
                        <div className='text'>Add Names</div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <Icon icon={fileText} size={22}/>
                        </div>
                        <div className='text'>Add Notes</div>
                    </div>
                </div>
                <div className='customizer-box'>
                    <div className="input-group mb-3 container">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <Icon icon={ic_search} size={22}/>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search for artwork" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className='art-box'>
                        <Art art={art}/>
                    </div>                    
                </div>            
            </div>)} 
        </>              
    )
}
