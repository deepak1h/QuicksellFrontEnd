import React from 'react'
import "./Card.css"
import Status from './Status';
import PriorityIcon from './Priority';

const Card = ({ id, title, status, tag, priority}) => {

    return (
        <div className="cardContainer" >

            <div className="cardHead">
                <span>{id}</span>
                <div className="imgContainer">
                    <Status userId={status} />
                </div>
            </div>

            <div className="cardTitle">
                <span>{title}</span>
            </div>

            <div className="cardTags">
                <div className="tags">
                    <PriorityIcon priority={priority}/>
                </div>

                {tag?.map((e, ind) => { 
                    return <div className="tags" key={ind} > 
                    <PriorityIcon priority={"dot"}/>
                    {e}
                    </div>
                    })}
            </div>

        </div>
    )
}

export default Card;
