
function CardDetails({ card }) {
  return (
    <div className="flex gap-5">

      <img src={card.card_images[0].image_url_small} />

      <p>
        <div className="tm-title-1 mb-2"><b>{card.name}</b></div>
        <div className="mb-2">
          {card.atk && <span>Atk: <b>{card.atk}</b> &nbsp;</span>}
          {card.def && <span>Def: <b>{card.def}</b> &nbsp;</span>}
          {card.level && <span>Level: <b>{card.level}</b> &nbsp;</span>}
          {card.attribute && <span>Attribute: <b>{card.attribute}</b></span>}
        </div>

        <div className="mb-2">
          {card.type && <span>Type: <b>{card.type}</b> &nbsp;</span>}
          {card.race && <span>Race: <b>{card.race}</b> &nbsp;</span>}
          {card.archetype && <span>Arche Type: <b>{card.archetype}</b> &nbsp;</span>}
          {card.frameType && <span>Frame Type: <b>{card.frameType}</b></span>}
        </div>
        Description: <br />

        <b>{card.desc.replace("''", '').replace("''", '')}</b><br />
      </p>

    </div>
  )
}

export default CardDetails;