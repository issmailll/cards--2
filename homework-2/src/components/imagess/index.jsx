import Items from "./Items";
import "./style.scss";

const Imagess = () => {
  return (
    <>
      <section className="images">
        <div className="container images__container">
          <div className="images__title__wrapper">
            <div>
              <h2 className="images__title">Kegiatan Pojok Baca Probolinggo</h2>
              <p className="images__title-description">
                Intip kegiatan yang telah kami selenggarakan{" "}
              </p>
            </div>
            <p className="images__title-location">Selengkapnya</p>
          </div>
          <ul className="images__list">
            <Items />
          </ul>
        </div>
      </section>
    </>
  );
};
export default Imagess;
