
function CardTable({cardList, handleSelectCard}) {
    return (
      <div className="flex flex-wrap justify-items-center">
        {cardList.map(card => (
          <img
            className="clickable"
            src={card.card_images[0].image_url_small}
            style={{ width: '134px', height: '180px' }}
            onClick={() => handleSelectCard(card)}
          />
          // width: '268px', height: '361px'
        ))}
      </div>
    )
}

export default CardTable;