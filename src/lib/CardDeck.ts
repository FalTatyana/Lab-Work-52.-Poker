import Card from "./Card.ts";

class CardDeck {
  public cardDeck: Card[] = [];
  private suites: string[] = ["spades", "hearts", "clubs", "diams"];
  private ranks: string[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  constructor() {
    this.suites.forEach((suite) => {
      this.ranks.forEach((rank) => {
        const card = new Card(rank, suite);
        this.cardDeck.push(card);
      });
    });
  }

  getCard(): Card {
    const random = Math.floor(Math.random() * this.cardDeck.length);
    const card = this.cardDeck[random];

    this.cardDeck.splice(random, 1);
    return card;
  }

  getCards(howMany: number): Card[] {
    const needCards = [];

    if (this.cardDeck.length < howMany) {
      alert("Not enough cards to deal");
      return [];
    }

    for (let i = 0; i < howMany; i++) {
      needCards.push(this.getCard());
    }

    return needCards;
  }
}

export default CardDeck;
