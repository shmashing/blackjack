require(__dirname+"/Deck.js");

class Player{
    constructor(name, deck){
        this.name = name;
        this.hand = []
    }
    draw(deck){
        this.hand[this.hand.length] = deck.draw();
    }
}

let deck = new Deck();
let kyle = new Player("Kyle");
kyle.draw(deck);
