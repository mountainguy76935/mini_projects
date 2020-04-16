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

    const handleTouch =(e) => {
        e.preventDefault()
        props.handleHover(props.picture)
        setActive(true);
    }

    const handleTouchEnd =(e) => {
        e.preventDefault()
    }

    return(
        <div 
            className='circles'
            onTouchStart={handleTouch}
            onTouchEnd={handleTouchEnd}
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
