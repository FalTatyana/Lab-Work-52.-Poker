import './App.css';
import CardDeck from './lib/CardDeck';

const App = () => {
  const props = {
    rank: 'a',
    suit: 'hearts',
  };

  const cardClasses = `card rank-${props.rank} ${props.suit}`;

  let cardSuit = '';

  if (props.suit === 'hearts') {
    cardSuit = '♥';
  } else if (props.suit === 'diams') {
    cardSuit = '♦';
  } else if (props.suit === 'clubs') {
    cardSuit = '♣';
  } else {
    cardSuit = '♠';
  } 

  const cardDeck = new CardDeck();
  console.log(cardDeck.getCards(4));
  
  

  return (
    <div className="playingCards faceImages">
      <span className={cardClasses}>
        <span className="rank">{props.rank.toUpperCase()}</span>
        <span className="suit">{cardSuit}</span>
      </span>
    </div>
  );
};

export default App;