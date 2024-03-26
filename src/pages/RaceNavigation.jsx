import { useState } from "react";
import { getCardByRace } from "../services/yugioh-service";
import { DNA } from "react-loader-spinner";
import CardDetails from "../components/CardDetails";
import RaceSelector from "../components/RaceSelector";
import CardTable from "../components/CardTable";


function RaceNavigation() {
  const [card, setCard] = useState();
  const [cardList, setCardList] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = (race) => {
    setLoading(true);
    setCard(null);
    setCardList(null);
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

  const handleSelectCard = (card) => {
    setCard(card);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

      <RaceSelector handleClick={handleClick} />

      {
        card &&
        <div className="my-5">
          <CardDetails card={card} />
        </div>
      }

      {
        cardList && <CardTable cardList={cardList} handleSelectCard={handleSelectCard} />
      }
    </>
  )
}

export default RaceNavigation
