import React, { useEffect, useState } from 'react';
import '../../AllThings.css';

function OneCard({ game, pep, players, teams, nat, Klopp }) {

  const [selectedCards, setSelectedCards] = useState([]); 
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const [remainingSkips, setRemainingSkips] = useState(50);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [greenCardCount, setGreenCardCount] = useState(0);
  const [redCardCount, setRedCardCount] = useState(0);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

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

    setSelectedCards(shuffleArray(allCards).slice(0, 16));
    setSelectedPlayerIndex(0);
  }, [pep, teams, nat, Klopp, players]);

  const handleSkip = () => {
    if (remainingSkips > 0) {
      setRemainingSkips((prevSkips) => prevSkips - 1);
      const randomIndex = Math.floor(Math.random() * players.length);
      setSelectedPlayerIndex(randomIndex);
      setSelectedPlayer(players[randomIndex]);
    }

  };
  var points = greenCardCount - redCardCount
const handleCardClick = (index) => {
  console.log(selectedCards[index].Name);
  setRemainingSkips((prevSkips) => prevSkips - 1);
  const randomIndex = Math.floor(Math.random() * players.length);
  setSelectedPlayerIndex(randomIndex);
  setSelectedPlayer(players[randomIndex]);
  if (selectedCards[index].Name !== selectedPlayer.nationalite) {
    console.log('Player nationality dont matched!');
    document.getElementById(`card_${index}`).style.backgroundColor = 'red';
  }

  if (!selectedPlayer.teams.includes(selectedCards[index].Name)) {
    console.log('Player team dont matched!');
    document.getElementById(`card_${index}`).style.backgroundColor = 'red';
  }

  if (selectedCards[index].Name === selectedPlayer.nationalite) {
    console.log('Player nationality matched!');
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
  }

  if (selectedPlayer.teams.includes(selectedCards[index].Name)) {
    console.log('Player team matched!');
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
  }

  if ((selectedPlayer.Player_name).includes(Klopp.players)) {
    console.log('Player Klopp matched!');
    document.getElementById(`card_${index}`).style.backgroundColor = 'green';
}

  if (selectedCards[index].Name === selectedPlayer.nationalite || selectedPlayer.teams.includes(selectedCards[index].Name)) {
    points += 1;
    setGreenCardCount(greenCardCount + 1);
  } else {
    points -= 1;
    setRedCardCount(redCardCount + 1);
  }
};
console.log(selectedPlayer)
return (
  <>
    {remainingSkips > 0 && (
      <>
        <div className='choosePlayer'>
          <h4>Remaining Skips: {remainingSkips}</h4>
          <h6>{selectedPlayer?.Player_name}</h6>
          <button className='btnn' onClick={handleSkip}>
            <img src='https://cdn4.iconfinder.com/data/icons/remixicon-media/24/skip-back-fill-256.png' className='btnnnnn' alt=''/>
          </button>
        </div>
        <div className='cardddd'>
          {selectedCards.map((theCard, index) => (
            <div key={index} id={`card_${index}`} className={`smallCard ${index === selectedPlayerIndex ? 'active' : ''}`}>
              <button className="btn" onClick={() => handleCardClick(index)}>
                <img src={theCard.image} alt='' className='imaaaage' />
                <p className='titreeeee'>{theCard.Name}</p>
              </button>
            </div>
          ))}
        </div>
      </>
    )}
    {remainingSkips === 0 &&(
      <div className='lastCard'>
        <p className='matchOver'>Match Over</p>
        <p className='points'>points: {points}</p>
        <p className="good">Great Answer: {greenCardCount} </p>
        <p className="bad">Bad Answer: {redCardCount} </p>
      </div>
    )}
  </>
);

}
export default OneCard;


