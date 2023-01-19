import React from 'react'
import Box from './Box'

const Row = (props) => {
    const nums=[1,2,3,4,5]
  return (
    <div className="flex flex-row justify-center items-center" >
            {
                nums.map((item, index) => (<Box rowId={props.id} key={index} id={index} />))
            }
            
        </div>
  )
}

export default Row;