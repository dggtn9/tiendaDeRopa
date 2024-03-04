import React from 'react'
import '.NewCollections.css' from NewCollections
import new_collections from './Assets/newCollection'
const NewCollections = () => {
    return (
        <div className='newcollections'>
            <h1>Nueva Colección</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
                    return <item key={i} id={item.id} name={item.name} image={item.image}
                        new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections