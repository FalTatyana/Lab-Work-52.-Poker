import Card from "./Card.ts";

class PokerHand {
  public deal: Card[];

  constructor(cards: Card[]) {
    this.deal = cards;
  }

  getOutcome(): string {
    const objRank: Record<string, number> = {};
    const objSuit: Record<string, number> = {};

    let combination = "";
    let pairCount = 0;

    for (const rank of this.deal) {
      if (objRank[rank.rank]) {
        objRank[rank.rank]++;
      } else {
        objRank[rank.rank] = 1;
      }
    };

    for (const suit of this.deal) {
      if (objSuit[suit.suit]) {
        objSuit[suit.suit]++;
      } else {
        objSuit[suit.suit] = 1;
      }
    };

    for (const key in objSuit) {
      if (objSuit[key] === 5) {
        combination = "flush";
      }
    };

    for (const key in objRank) {
      if (objRank[key] === 2) {
        pairCount++;
      }

      if (objRank[key] === 3) {
        combination = "three of a kind";
      }
    };

    if (pairCount === 2) {
      combination = "two pair";
    } else if (pairCount === 1 && combination === "") {
      combination = "one pair";
    };

    if (combination === "flush") {
      combination = "You have a flush";
    } else if (combination === "three of a kind") {
      combination = "You have three of a kind";
    } else if (combination === "two pair") {
      combination = "You have two pair";
    } else if (combination === "one pair") {
      combination = "You have one pair";
    } else {
      combination = "High card";
    };

    return combination;
  };
};

export default PokerHand;
