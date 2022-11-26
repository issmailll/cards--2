const Box = (props) => {
  const { box__itemLocation, box__itemName, box__itemDescription, box__itemImg } = props;

  return (
    <>
      <li className="box__list-item">
        <p className="box__item-description">{box__itemDescription}</p>
        <div className="box__item-img-wrapper">
          <img className="box__item-img" src={box__itemImg} alt={""} />
          <div className="box__item-name-wrapper">
            <p className="box__item-name">{box__itemName}</p>
            <p className="box__item-location">{box__itemLocation}</p>
          </div>
        </div>
      </li>
    </>
  );
};
export default Box;
