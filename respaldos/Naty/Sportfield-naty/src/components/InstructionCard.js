import React from 'react'

import '../styles/InstructionCard.css'

// eslint-disable-next-line react/prop-types
export const InstructionCard = ({instruction}) => {
        
    return (
        <div>
            <p className="card">
                {instruction}
            </p>
        </div>
    )
}
