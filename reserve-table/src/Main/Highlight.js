import React from 'react'
import { useState } from 'react'
import { Button, Container,Row,Col} from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';
import HighlightRow from './HighLightRow'
import greeksalad from './assets/greeksalad.jpg'
import bruschetta from './assets/bruschetta.png'
import lemondessert from './assets/lemondessert.jpg'
import lasagna from './assets/lasagna.jpg'
import pasta from './assets/pasta.jpg'
import couscous from './assets/couscous.jpg'

function Highlight() {

  const hightLightCard = [
    {
      src : greeksalad,
      title : 'Greek Salad',
      price : '$12.00',
      description : 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      src : bruschetta,
      title : 'Bruschetta',
      price : '$5.99',
      description : 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      src: lemondessert,
      title : 'Lemon Dessert',
      price : '$5.00',
      description : 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    },
    {
      src : lasagna,
      title : 'Signature Lasagna',
      price : '$14.99',
      description : 'Layers of fresh pasta, slow-cooked meat sauce, creamy béchamel, and melted mozzarella, finished with a hint of lemon and fresh herbs. A bold, comforting classic with a bright Mediterranean twist.'
    },
    {
      src : pasta,
      title : 'Mushroom Penne',
      price: '$19.99',
      description: 'Tender penne pasta tossed in a rich, velvety garlic cream sauce with sautéed mushrooms and a hint of Parmesan. Finished with a sprinkle of fresh parsley for a bright, herbaceous touch. Comforting, indulgent, and full of flavor.'
    },
    {
      src: couscous,
      title : 'Mediterenean Couscous',
      price : '$9.99',
      description: 'Fluffy golden couscous tossed with sautéed broccoli, mushrooms, and sweet corn, topped with a fiery chili-garlic glaze. Finished with fresh cilantro and whole red and green chilies for a bold, aromatic kick. A colorful, plant-powered dish with attitude.'
    }
  ]

  const [expanded, setExpanded] = useState(false);
  const firstRowCards = hightLightCard.slice(0, 3);
  const secondRowCards = hightLightCard.slice(3);

  return (
    <Container className='container-style'>
      <Row className="d-flex justify-content-between align-items-center mb-4">
      <Col xs="auto">
        <h1 className="mb-0">Specials</h1>
      </Col>
      <Col xs="auto">
      <Button
        className="px-5 py-3 fw-bolder text-black border-0 rounded-3 fs-5 shadow-none"
        style={{
          backgroundColor: '#F4CE14',
          'font-weight': '900',
          'font-family': "'Karla', sans-serif",
          fontSize: '1.0rem', // slightly smaller than fs-5
          letterSpacing: '-0.75px', // tighter spacing adds weight visually
        }}>
        Online Menu
      </Button>
      </Col>
    </Row>
    <HighlightRow cards={firstRowCards}/>
    {expanded && <HighlightRow cards={secondRowCards} />}
    <div className="text-center mt-3">
      <button
        className="btn btn-warning fw-bold px-4 py-2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
    </Container>
  )
}

export default Highlight