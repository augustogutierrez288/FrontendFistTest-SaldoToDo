function ItemsRates({active}) {
  return (
    <article className='card'>
                <h5 className='card-title'>{active.id}</h5>
                <p className='card-subtitle'>Tipo de cambio: {active.currency}</p>
                <div className='card-price'>
                <p className='card-price-ask'>$ {active.ask.toFixed(2)}</p>
                <p className='card-price-bid'>$ {active.bid.toFixed(2)}</p>
                </div>
            </article>
  )
}

export default ItemsRates