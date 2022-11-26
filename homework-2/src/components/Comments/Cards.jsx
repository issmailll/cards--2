const Cards = (props) => {
  const { comments__cardName, comments__cardText, comments__img } = props;
  console.log(props);
  return (
    <>
      <div className="comments__card-wrapper">
        <p className="comments__card-title">
          “Aku rela dipenjara asalkan{" "}
          <span className="comments__card-span">bersama buku,</span> karena
          dengan buku <span className="comments__card-span">aku bebas</span>”
        </p>
        <div className="comments__card-img-wrapper">
          <img
            className="comments__img"
            alt="Mohammed Hatta img"
            width={"80px"}
            height={"80px"}
            src={comments__img}
          />
          <div className="comments__card-text-wrapper">
            <p className="comments__card-name">{comments__cardName}</p>
            <p className="comments__card-text">
              {comments__cardText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
