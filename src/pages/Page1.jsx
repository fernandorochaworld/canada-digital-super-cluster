import Button from "../components/Button"
import Input from "../components/Input"
import { getCardByName } from "../services/yugioh-service"
import { useState } from "react";
import CardDetails from "../components/CardDetails";
import CardTable from "../components/CardTable";
import { DNA } from "react-loader-spinner";

function Page1() {
  const [card, setCard] = useState();
  const [cardList, setCardList] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setCard(null);
    setCardList(null);

    getCardByName(e.target.cardName.value).then(data => {
      // console.log(data)
      if (data.data.length) {
        setCardList(data.data);
        setCard(data.data[0]);
      }
      setLoading(false);
    })
      .catch(error => {
        setLoading(false);
        alert('No card matching your query was found.');
      });
  }

  const handleSelectCard = (card) => {
    setCard(card);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

      <Input type="text" name="cardName" title="Yu-Gi-Oh Card Name" />
      <Button title="Search" type="submit" styleType="primary" value="search" />

      {
        card &&
        <div className="my-5">
          <CardDetails card={card} />
        </div>
      }

      {
        cardList && <CardTable cardList={cardList} handleSelectCard={handleSelectCard} />
      }

    </form>
  )
}

export default Page1;
