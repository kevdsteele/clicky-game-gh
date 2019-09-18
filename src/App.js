import React, {Component} from "react";
import InnerWrapper from "./components/InnerWrapper/"
import Navbar from "./components/Navbar/";
import Jumbotron from "./components/Jumbotron/";
import CharacterCard from "./components/CharacterCard"
import Footer from "./components/Footer/";
import characters from "./characters.json";

class App extends Component {
  
  state= {
    characters: characters,
    currentScore:0,
    highScore:0,
    guessed: [],
    message: "Click an Image to begin!"
  };


shuffle = (array) => {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
this.setState({characters: array})
}


checkClick = (characterId, score, hScore) => {
  if (!this.state.guessed.includes(characterId)) {
    score++
    this.state.guessed.push(characterId)
    this.setState({currentScore: score,
    message: "Correct. You earned a point!"})

    if (score > hScore) {
  
      this.setState({highScore: score})
    }

    if (score=== 12) {
      this.setState({message:"You win. Click any image to play again",
      currentScore:0,
      highScore: 0,
      guessed: []
    })
    }

  } else {
    
    this.setState({message: "Incorrect. Try again",
                  currentScore: 0,
                guessed:[]})
  }

}


render() {


  return (
    <div >
      <div className="container-fluid pl-0 pr-0 mr-0 ml-0">
      <Navbar 
      currentScore={this.state.currentScore}
      highScore={this.state.highScore}
      message={this.state.message}/>
      <Jumbotron />
      </div>
      <div className="container mr-auto ml-auto">
      <InnerWrapper>
      {this.state.characters.map(character => (
        <CharacterCard
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}
        characters={this.state.characters}
        checkClick={this.checkClick}
        checkHigh={this.checkHigh}
        shuffle={this.shuffle}
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        />
      ))}
      </InnerWrapper>
      </div>
      <Footer />
      </div>
  )

  }

} 

export default App;
