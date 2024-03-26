import { data } from "browserslist"
import Button from "../components/Button"
import Input from "../components/Input"
import { getCardByName } from "../services/yugioh-service"
import { useState } from "react";

function Page1() {
  const [card, setCard] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    getCardByName(e.target.cardName.value).then(data => {
      // console.log(data)
      if (data.data.length) {
        setCard(data.data[0]);
      }
    })
    .catch(error => {
      alert('No card matching your query was found.');
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>Search by Name</div>

      <Input type="text" name="cardName" title="Yu-Gi-Oh Card Name" />
      <Button title="Search" type="submit" styleType="primary" value="search" />


      {
        card && 
        <div className="flex gap-5">
          <img src={card.card_images[0].image_url_small} />

          <p>
            archetype: <b>{card.archetype}</b><br />
            atk: <b>{card.atk}</b><br />
            attribute: <b>{card.attribute}</b><br />
            def: <b>{card.def}</b><br />
            desc: <b>{card.desc.replace("''", '').replace("''", '')}</b><br />
            frameType: <b>{card.frameType}</b><br />
            id: <b>{card.id}</b><br />
            level: <b>{card.level}</b><br />
            name: <b>{card.name}</b><br />
            race: <b>{card.race}</b><br />
            type: <b>{card.type}</b><br />
          </p>
        </div>
      }

    </form>
  )
}

export default Page1;
