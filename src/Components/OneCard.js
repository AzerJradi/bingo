import React, { useEffect, useState } from 'react';

function OneCard({ game, pep, players, teams, nat, Klopp }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const [remainingSkips, setRemainingSkips] = useState(50);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSkip = () => {
    if (remainingSkips > 0) {
      setRemainingSkips((prevSkips) => prevSkips - 1);
      setSelectedPlayerIndex((prevIndex) => (prevIndex + 1) % 50);
      setSelectedPlayer((selectedPlayerIndex) =>
        selectedPlayerIndex < 49 ? players[selectedPlayerIndex + 1] : players[0]
      );
    }
  };

  return (
    <>
      <div className='choosePlayer'>
        <h4>Remaining Skips: {remainingSkips}</h4>
        <h6>{selectedPlayer?.Player_name}</h6>
        <button className='btnn' onClick={handleSkip}>
          <img
            src='https://cdn4.iconfinder.com/data/icons/remixicon-media/24/skip-back-fill-256.png'
            className='btnnnn'
            alt=''
          />
        </button>
      </div>
      <div className='cardddd'>
        {selectedCards.map((theCard, index) => (
          <div key={index} className={`smallCard ${index === selectedPlayerIndex ? 'active' : ''}`}>
            <button className="btn" style={{ backgroundColor: selectedPlayer && selectedPlayer.nationalite === theCard.Name ? 'green' : selectedPlayer && selectedPlayer.nationalite !== theCard.Name ? 'red' : 'white' }}>
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
