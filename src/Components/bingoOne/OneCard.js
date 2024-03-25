import React, { useEffect, useState } from 'react';
import '../../AllThings.css';

function OneCard({ game, pep, players, teams, nat, Klopp }) {
  // State variables initialization
  const [selectedCards, setSelectedCards] = useState([]); // State to store selected cards
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0); // Index of the selected player
  const [remainingSkips, setRemainingSkips] = useState(50); // Number of remaining skips
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Currently selected player
  const [greenCardCount, setGreenCardCount] = useState(0); // Number of green cards
  const [redCardCount, setRedCardCount] = useState(0);
  // useEffect to handle initialization and re-rendering when dependencies change
  useEffect(() => {
    // Function to shuffle an array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Shuffling and selecting cards, players, and other data
    const shuffledPep = shuffleArray(pep).slice(0, 16);
    const shuffledKlopp = shuffleArray(Klopp).slice(0, 16);
    const shuffledTeams = shuffleArray(teams).slice(0, 16);
    const shuffledNat = shuffleArray(nat).slice(0, 16);
    const sufflePlayer = shuffleArray(players).slice(0, 50);
    if (players.length > 0) {
      const shuffledPlayers = shuffleArray(players).slice(0, 50);
      setSelectedPlayer(shuffledPlayers[0]);
    }
    const allCards = [
      ...shuffledPep,
      ...shuffledKlopp,
      ...shuffledTeams,
      ...shuffledNat,
    ];

    // Updating state with shuffled cards and reseting selected player index
    setSelectedCards(shuffleArray(allCards).slice(0, 16));
    setSelectedPlayerIndex(0);
  }, [pep, teams, nat, Klopp, players]);

  // Function to handle skip button click
  const handleSkip = () => {
    if (remainingSkips > 0) {
      setRemainingSkips((prevSkips) => prevSkips - 1);
  
      // Selecting a random index within the range of players array length
      const randomIndex = Math.floor(Math.random() * players.length);
  
      // Setting the selected player based on the randomly chosen index
      setSelectedPlayerIndex(randomIndex);
      setSelectedPlayer(players[randomIndex]);
    }
  };
  var points = greenCardCount - redCardCount

  // Function to handle card click
  // Function to handle card click
const handleCardClick = (index) => {
  points += 1;
  // Logic for handling card click
  console.log(selectedCards[index].Name);

  setRemainingSkips((prevSkips) => prevSkips - 1);
  const randomIndex = Math.floor(Math.random() * players.length);
  setSelectedPlayerIndex(randomIndex);
  setSelectedPlayer(players[randomIndex]);

  // Check if the name of the clicked card matches the nationality of the selected player
  if (selectedCards[index].Name !== selectedPlayer.nationalite) {
    points += -1;
    // Apply red background if not matched
    console.log('Player nationality dont matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'red';
  }

  if (!selectedPlayer.teams.includes(selectedCards[index].Name)) {
    points += -1;
    // Apply red background if not matched
    console.log('Player team dont matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'red';
  }

  if (selectedPlayer.managedByPep && selectedCards[index].Name !== selectedPlayer.managedByKlop) {
    // Apply red background if not matched
    console.log('Player pep matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'red';
  }

  // Check if the name of the clicked card matches the nationality of the selected player
  if (selectedCards[index].Name === selectedPlayer.nationalite) {
    // Apply green background if matched
    console.log('Player nationality matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
  }

  if (selectedPlayer.teams.includes(selectedCards[index].Name)) {
    // Apply green background if matched
    console.log('Player team matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
  }

  if (selectedPlayer.managedByPep && selectedCards[index].Name === selectedPlayer.managedByKlop) {
    // Apply green background if matched
    console.log('Player pep matched!');
    // Update the background color of the clicked card using inline style
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
  }


  if (selectedCards[index].Name !== selectedPlayer.nationalite) {
    points -= 1;
    setRedCardCount(redCardCount + 1);
  } else {
    points += 1;
    setGreenCardCount(greenCardCount + 1);
  }

  if (!selectedPlayer.teams.includes(selectedCards[index].Name)) {
    points -= 1;
    setRedCardCount(redCardCount + 1);
  } else {
    points += 1;
    setGreenCardCount(greenCardCount + 1);
  }

  if (selectedPlayer.managedByPep && selectedCards[index].Name !== selectedPlayer.managedByKlop) {
    points -= 1;
    setRedCardCount(redCardCount + 1);
  } else {
    points += 1;
    setGreenCardCount(greenCardCount + 1);
  }


};

console.log("green:",greenCardCount)
console.log("red:",redCardCount)
console.log(selectedCards)
  // JSX to render component
  return (
    <>
      <div className='choosePlayer'>
        <h3>points: {points}</h3>
        <h4>Remaining Skips: {remainingSkips}</h4>
        <h6>{selectedPlayer?.Player_name}</h6>
        {/* Skip button */}
        <button className='btnn' onClick={handleSkip}>
          <img src='https://cdn4.iconfinder.com/data/icons/remixicon-media/24/skip-back-fill-256.png' className='btnnnnn' alt=''/>
        </button>
      </div>
      {/* Render cards */}
      <div className='cardddd'>
  {selectedCards.map((theCard, index) => (
    <div key={index} id={`card_${index}`} className={`smallCard ${index === selectedPlayerIndex ? 'active' : ''}`}>
      {/* Card component */}
      <button className="btn" onClick={() => handleCardClick(index)}>
        <img src={theCard.image} alt='' className='imaaaage' />
        <p className='titreeeee'>{theCard.Name}</p>
      </button>
    </div>
  ))}
</div>

    </>
  );
}

export default OneCard;


