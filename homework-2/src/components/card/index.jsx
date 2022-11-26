import Box from "./box";
import "./style.scss";
import box__hurryImg from "../../assets/images/box-harry-img.png";
import box__simmonImg from "../../assets/images/box-simmon-img.png";
const BoxIndex = () => {
  return (
    <>
      <div className="box">
        <div className="container box__container">
          <div className="box__title-wrapper">
            <div>
              <h2 className="box__title">Apa Kata Mereka?</h2>
              <p className="box__title-description">
                Mereka yang telah menjadi pengunjung tetap kami
              </p>
            </div>
            <p className="box__location">Selengkapnya</p>
          </div>
          <ul className="box__list">
            <Box
              box__itemImg={box__hurryImg}
              box__itemDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              box__itemName="Guy Hawkins"
              box__itemLocation="32 Tahun, Karyawan"
            />
            <Box
              box__itemImg={box__simmonImg}
              box__itemDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              box__itemName="Brooklyn Simmons"
              box__itemLocation="20 Tahun, Mahasiswa"
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default BoxIndex;
