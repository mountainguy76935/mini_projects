import React from 'react';
import './circles.styles.css';
import { CircleUnder } from '../circle-under/circle-under.component'

export const Circles = (props) => {
    const [active, setActive] = React.useState(false)

    const handleHover =() => {
        props.handleHover(props.picture)
        setActive(true);
        props.handleChange(props.color)
    }

    return(
        <div 
            className='circles'
            onTouchStart={handleHover}
            onTouchEnd={null}
            onMouseEnter={handleHover}
        >
            {active ? 
            <React.Fragment>
                <CircleUnder 
                key = {props.picture.id} 
                picture = {props.picture}
                {...props}
                /> 
            </React.Fragment>  :
            <div 
                className='balls' 
                style={{backgroundColor: props.color}}></div>    
        }
        </div>
    )
}
