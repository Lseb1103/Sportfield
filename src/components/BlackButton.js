import {React, useState, useEffect } from 'react'

import '../styles/BlackButton.css'

// eslint-disable-next-line react/prop-types
export const BlackButton = ({button_name}) => {

    const [buttonName, setButtonName] = useState("")
    // const [ setButtonFunc] = useState(null)


    useEffect(() => {
        setButtonName(button_name);
        // setButtonFunc(button_func)
    }, [button_name])

    return (
        <button className="black-button" >{buttonName}</button>
    )
}
