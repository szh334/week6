// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')
var handCards = require('./initialcards.json')

// END OF STUFF TO NOT MODIFY

var App = React.createClass({
  dealCardsClicked : function() { //function that handles the Deal button click
    var randDeck = getDeck().shuffle()//use the getDeck and shuffle functions to randomize a new deck
    console.log(randDeck) //log the randDeck
        this.setState(//define a new state where the picture and cardname are the elements of randDeck
          { hand:
            [
            {"handcardnumber": "1",
              "picture": "http://golearntocode.com/images/cards/" + randDeck[0] + ".png",
              "cardname": randDeck[0]},
            {"handcardnumber": "2",
              "picture": "http://golearntocode.com/images/cards/" + randDeck[1] + ".png",
              "cardname": randDeck[1]},
            {"handcardnumber": "3",
              "picture": "http://golearntocode.com/images/cards/" + randDeck[2] + ".png",
              "cardname": randDeck[2]},
            {"handcardnumber": "4",
              "picture": "http://golearntocode.com/images/cards/" + randDeck[3] + ".png",
              "cardname": randDeck[3]},
            {"handcardnumber": "5",
              "picture": "http://golearntocode.com/images/cards/" + randDeck[4] + ".png",
              "cardname": randDeck[4]}
            ] }
        )
  },
  getInitialState: function() {
    return {
      hand: handCards
    }
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
          <div className="row">
            <Card picture = {this.state.hand[0].picture}/>
            <Card picture = {this.state.hand[1].picture}/>
            <Card picture = {this.state.hand[2].picture}/>
            <Card picture = {this.state.hand[3].picture}/>
            <Card picture = {this.state.hand[4].picture}/>
            <div className="col-sm-2">
              <h1><a href="#" className="btn btn-success" onClick={this.dealCardsClicked}>Deal</a></h1>
            </div>
          </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
