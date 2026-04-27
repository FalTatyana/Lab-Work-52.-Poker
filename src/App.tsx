import './App.css';
import CardDeck from './lib/CardDeck';
import { useState } from 'react';
import PokerHand from './lib/PokerHand';

const App = () => {

  const [cards, setCards] = useState([]);

  const getSuit = (suit: string) => {
    if (suit === 'hearts') return '♥';
    if (suit === 'diams') return '♦';
    if (suit === 'clubs') return '♣';
    return '♠';
  };

  const deck = new CardDeck();
  const pokerCombination = new PokerHand(cards);
  

  const dealCards = () => {
    const deal = deck.getCards(5);
    setCards(deal);
  }

  return (
    <div className="playingCards faceImages">
      <button className='btn' onClick={dealCards}>Deal сards</button>

      <div className="container">
        {cards.map((card, index) => (
          <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`} >
            <span className="rank">{card.rank.toUpperCase()}</span>
            <span className="suit">{getSuit(card.suit)}</span>
          </span>
        ))}
      </div>
      <p className='p'>{pokerCombination. getOutcome()}</p>
    </div >
  );

};

export default App;