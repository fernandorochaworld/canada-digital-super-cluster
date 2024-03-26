
function CardDetails({ card }) {
  return (
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
  )
}

export default CardDetails;