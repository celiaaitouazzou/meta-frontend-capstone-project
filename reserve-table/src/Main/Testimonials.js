import React from 'react'
import { Container } from 'react-bootstrap'
import icon1 from './Ticon/icon1.png'
import icon2 from './Ticon/icon2.png'
import icon3 from './Ticon/icon3.png'
import icon4 from './Ticon/icon4.png'
import halfstar from './icons/halfstar.png'
import fullstar from './icons/fullstar.png'
import emptystar from './icons/emptystar.png'

function Testimonials() {

    const cardContent = [
        {
            rating:'4.5',
            src: icon1,
            comment :''
        }
    ]
    return (
    <Container>
        <h1>Testimonials</h1>
        <div>

        </div>
    </Container>
    )
}

export default Testimonials