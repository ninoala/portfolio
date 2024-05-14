const StrategyCard = ( {heading, text, icon} ) => {
  // dynamically render the icon based on the 'icon' prop
  const IconComponent = icon;

  return (
    <div className='strategy-card'>
      <IconComponent className='strategy-card__icon' />
      <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
      <p className="strategy-card__text">{text}</p>
    </div>
  )
}

export default StrategyCard;