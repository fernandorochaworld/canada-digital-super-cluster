import { data } from "browserslist"
import Button from "../components/Button"
import Input from "../components/Input"
import { getCardByName } from "../services/yugioh-service"
import { useState } from "react";
import CardDetails from "../components/CardDetails";

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
        <CardDetails card={card}/>
      }

    </form>
  )
}

export default Page1;
