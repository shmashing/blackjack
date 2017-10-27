class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        
        let face = "";
        if(value <= 10 && value >= 2){
            face = String(value);
        } else if(value == 11){
            face = "Jack";
        } else if(value == 12){
            face = "Queen";
        } else if(value == 13){
            face = "King";
        } else if(value == 14){
            face = "Ace";
        } else {
            throw "Value: " + String(value) + " out of bounds. Value must be between 2 and 14";
        }
        this.face = face;
    }
    print(){
        console.log(this.face + " of " + this.suit);
    }
}

class Deck{
    constructor(){
        this.cards = [];
        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

        for(var i=0;i<4;i++){
            let suit = suits[i];
            for(var j=0;j<13;j++){
                this.cards[i*13 + j] = new Card(suit, j+2);
            }
        }
    }
    shuffle(){
        for(var i=0;i<this.cards.length;i++){
            let rand_idx = Math.floor(Math.random()*52)
            let temp = this.cards[i];
            this.cards[i] = this.cards[rand_idx];
            this.cards[rand_idx] = temp;
        }
    }
    deal(){
        let rand_idx = Math.floor(Math.random()*52);
        let temp = this.cards[rand_idx];
        this.cards[rand_idx] = this.cards[this.cards.length-1];
        this.cards[this.cards.length-1] = temp;
        
        return this.cards.pop();
    }
    reset(){
        this.cards = [];
        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        
        for(var i=0;i<4;i++){
            let suit = suits[i];
            for(var j=0;j<13;j++){
                this.cards[i*13 + j] = new Card(suit, j+2);
            }
        }  
    }
    print(){
        for(var i=0;i<this.cards.length;i++){
            this.cards[i].print();
        }
    }
}
