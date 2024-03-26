import Button from "../components/Button";

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
  // const [count, setCount] = useState(0)

  return (
    <div>
      Monsters:
      <div className="flex item-center flex-wrap gap-2">
        {race.monster.map(item => (
          <Button title={item}></Button>
        ))}
      </div>
      Spell Cards:
      <div className="flex item-center flex-wrap gap-2">
        {race.spell.map(item => (
          <Button title={item}></Button>
        ))}
      </div>
      Trap Cards:
      <div className="flex item-center flex-wrap gap-2">
        {race.trap.map(item => (
          <Button title={item}></Button>
        ))}
      </div>
    </div>
  )
}

export default Page2
