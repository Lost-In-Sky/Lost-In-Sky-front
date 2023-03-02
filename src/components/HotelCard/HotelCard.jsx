import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { CardContainr, TestImageImutator } from './HotelCard.style';

const HotelCard = () => {

    const [showShadow, setShowShadow] = useState(false)
    return (
        <CardContainr onMouseOut={() => setShowShadow((prev) => prev = !prev)} >
            <TestImageImutator showShadow={showShadow} >
                <Button variant='contained' style={{ width: '6rem', height: '3rem' }}>
                    Hello
                </Button>
            </TestImageImutator >
        </CardContainr>


    )
}

export default HotelCard
