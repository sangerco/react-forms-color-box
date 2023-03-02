import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), backgroundColor: 'blue', width: '200', height: '200' }
    ]
    const [ boxes, setBoxes ] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div className='BoxList'>
            <div className='BoxList-boxes'>
                {boxes.map(({ id, backgroundColor, width, height }) => 
                    <Box 
                        key={id} 
                        id={id}
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