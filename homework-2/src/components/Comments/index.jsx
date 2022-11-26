import Cards from "./Cards";
import "./style.scss";
import comments__imgMohammed from "../../assets/images/comments-mohammed-img.png";
import comments__girlImg from "../../assets/images/comments-girl-img.png";

const Comments = () => {
  return (
    <>
      <section className="comments">
        <div className="container comments__container">
          <h2 className="comments__title">
            Kenapa Kita <span className="comments__title-span">Harus </span>
            Membaca Buku?
          </h2>
          <div className="comments__cards-wrapper">
            <Cards
              comments__img={comments__imgMohammed}
              comments__cardName="Mohammad Hatta"
              comments__cardText="Wakil Presiden Indonesia Pertama"
            />
            <Cards
              comments__img={comments__girlImg}
              comments__cardName="Najwa Shihab"
              comments__cardText="Duta Membaca"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Comments;
