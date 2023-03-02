import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = [
        { key: uuid(), backgroundColor: 'blue', width: '200', height: '200' }
    ]
    const [ boxes, setBoxes ] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, key: uuid()}])
    }
    const removeBox = (e) => {
        const box = e.target.parentNode
        let boxList = [...boxes]
        boxList.splice(box, 1);
        setBoxes(boxList);
    }

    return (
        <div className='BoxList'>
            <div className='BoxList-boxes'>
                {boxes.map(({ key, backgroundColor, width, height }) => 
                    <Box 
                        key={key} 
                        backgroundColor={backgroundColor} 
                        width={width} 
                        height={height}
                        removeBox={ removeBox }
                    />
                )}
            </div>
            <NewBoxForm addBox={ addBox } />
        </div>
    )
}

export default BoxList;