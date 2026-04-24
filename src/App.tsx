import './App.css'


const App = () => { 
  const props = {
    rank: '10',
    suit: 'hearts'
  }  
  const cardClasses = `card rank${props.rank} ${props.suit}`;
    return (
      <div className="playingCards faceImages">
        <span className={cardClasses}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{props.suit}</span>
        </span>
      </div>
    )
  };
  
  export default App