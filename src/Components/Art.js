import React from 'react'
import { IndividualArt } from './IndividualArt'

export const Art = ({art}) => {
    return art.map(individualArt=>(
        <IndividualArt key={individualArt.id} individualArt={individualArt}/>
    ))
}
