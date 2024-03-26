import { useState } from "react";
import Button from "../components/Button";
import { getCardByRace } from "../services/yugioh-service";
import { DNA } from "react-loader-spinner";

const race = {
  monster: [
    'Aqua',
    'Beast',
    'Beast-Warrior',
    'Creator-God',
    'Cyberse',
    'Dinosaur',
    'Divine-Beast',
    'Dragon',
    'Fairy',
    'Fiend',
    'Fish',
    'Insect',
    'Machine',
    'Plant',
    'Psychic',
    'Pyro',
    'Reptile',
    'Rock',
    'Sea Serpent',
    'Spellcaster',
    'Thunder',
    'Warrior',
    'Winged Beast',
    'Wyrm',
    'Zombie',
  ],
  spell: [
    'Normal',
    'Field',
    'Equip',
    'Continuous',
    'Quick-Play',
    'Ritual',
  ],
  trap: [
    'Normal',
    'Continuous',
    'Counter'
  ]
};


function Page2() {
  const [cardList, setCardList] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = (race) => {
    setLoading(true);
    getCardByRace(race).then(data => {
      // console.log(data)
      if (data.data.length) {
        setCardList(data.data);
      }
      setLoading(false);
    })
      .catch(error => {
        alert('No card matching your query was found.');
        setLoading(false);
      });
  }

  return (
    <>
      {
        loading &&
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      }
      <div className="flex item-center flex-wrap gap-2 mb-3">

        <div>
          Monsters:
          <div className="flex item-center flex-wrap gap-2">
            {race.monster.map(item => (
              <Button title={item} onClick={() => handleClick(item)}></Button>
            ))}
          </div>
        </div>
        <div>
          Spell Cards:
          <div className="flex item-center flex-wrap gap-2">
            {race.spell.map(item => (
              <Button title={item} onClick={() => handleClick(item)}></Button>
            ))}
          </div>
        </div>
        <div>
          Trap Cards:
          <div className="flex item-center flex-wrap gap-2">
            {race.trap.map(item => (
              <Button title={item} onClick={() => handleClick(item)}></Button>
            ))}
          </div>
        </div>
      </div>
      {
        cardList && (
          <div className="flex flex-wrap justify-items-center">
            {cardList.map(card => (
              <img
                src={card.card_images[0].image_url_small}
                style={{ width: '134px', height: '180px' }}
                />
              // width: '268px', height: '361px'
            ))}
          </div>
        )
      }
    </>
  )
}

export default Page2
