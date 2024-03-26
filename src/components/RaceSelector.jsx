import Button from "./Button";

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

function RaceSelector({handleClick}) {
    return (
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

    )
}

export default RaceSelector;