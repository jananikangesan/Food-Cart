import React from 'react'

const SetBodyColor = ({color}) => {
    document.documentElement.style.setProperty('--bodyColor', color)
}


export default SetBodyColor