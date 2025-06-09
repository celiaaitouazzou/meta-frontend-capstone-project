import React, { useState, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import HighlightRow from './HighLightRow';
import greeksalad from './assets/greeksalad.jpg';
import bruschetta from './assets/bruschetta.png';
import lemondessert from './assets/lemondessert.jpg';
import lasagna from './assets/lasagna.jpg';
import pasta from './assets/pasta.jpg';
import couscous from './assets/couscous.jpg';
import chevrondown from './icons/chevrondown.png';
import chevronup from './icons/chevronup.png';

function Highlight() {
  const hightLightCard = [
    {
      src: greeksalad,
      title: 'Greek Salad',
      price: '$12.00',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      src: bruschetta,
      title: 'Bruschetta',
      price: '$5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      src: lemondessert,
      title: 'Lemon Dessert',
      price: '$5.00',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
    {
      src: lasagna,
      title: 'Signature Lasagna',
      price: '$14.99',
      description:
        'Layers of fresh pasta, slow-cooked meat sauce, creamy béchamel, and melted mozzarella, finished with a hint of lemon and fresh herbs. A bold, comforting classic with a bright Mediterranean twist.',
    },
    {
      src: pasta,
      title: 'Mushroom Penne',
      price: '$19.99',
      description:
        'Tender penne pasta tossed in a rich, velvety garlic cream sauce with sautéed mushrooms and a hint of Parmesan. Finished with a sprinkle of fresh parsley for a bright, herbaceous touch. Comforting, indulgent, and full of flavor.',
    },
    {
      src: couscous,
      title: 'Mediterranean Couscous',
      price: '$9.99',
      description:
        'Fluffy golden couscous tossed with sautéed broccoli, mushrooms, and sweet corn, topped with a fiery chili-garlic glaze. Finished with fresh cilantro and whole red and green chilies for a bold, aromatic kick. A colorful, plant-powered dish with attitude.',
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const secondRowRef = useRef(null); // Create a ref

  const firstRowCards = hightLightCard.slice(0, 3);
  const secondRowCards = hightLightCard.slice(3);

  const handleToggleExpand = () => {
    setExpanded(!expanded);

    // Scroll to the second row after a slight delay (matching the animation)
    setTimeout(() => {
      if (!expanded && secondRowRef.current) {
        secondRowRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600); // Adjust the delay (in milliseconds) to be slightly longer than your CSS transition duration (0.5s = 500ms)
  };

  return (
    <Container className="container-style" as="section" aria-label="Menu highlights" role="region">
      <Row className="d-flex justify-content-between align-items-center mb-4" role="presentation">
        <Col xs="auto">
          <h1 className="mb-0" id="specials-title" aria-level="1">
            Specials
          </h1>
        </Col>
        <Col xs="auto">
          <Button
            className="px-5 py-3 fw-bolder text-black border-0 rounded-3 fs-5 shadow-none"
            style={{
              backgroundColor: '#F4CE14',
              fontWeight: '900',
              fontFamily: "'Karla', sans-serif",
              fontSize: '1.0rem', // slightly smaller than fs-5
              letterSpacing: '-0.75px', // tighter spacing adds weight visually
            }}
            aria-label="View full online menu"
            role="link"
          >
            Online Menu
          </Button>
        </Col>
      </Row>
      <HighlightRow cards={firstRowCards} aria-label="Highlighted menu items" role="list" />

      <div
        className={`highlight-row-animated ${expanded ? '' : 'highlight-row-collapsed'}`}
        ref={secondRowRef}
        aria-live="polite"
        aria-label="More highlighted menu items"
        role="region"
        tabIndex={-1}
      >
        {expanded && <HighlightRow cards={secondRowCards} aria-label="Additional menu highlights" role="list" />}
      </div>
      <div className="text-center mt-3">
        <button
          className="btn btn-warning fw-bold px-4 py-2"
          onClick={handleToggleExpand}
          aria-controls="specials-title"
          aria-expanded={expanded}
          aria-label={expanded ? 'Show less menu highlights' : 'Show more menu highlights'}
        >
          {expanded ? (
            <>
              Show Less
              <img
                src={chevronup}
                height={20}
                width={20}
                className="ms-2"
                alt="Chevron Up"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              Show More
              <img
                src={chevrondown}
                height={20}
                width={20}
                className="ms-2"
                alt="Chevron Down"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
    </Container>
  );
}

export default Highlight;