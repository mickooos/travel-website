import News1 from "../../assets/images/news.jpg";
import News2 from "../../assets/images/news2.jpg";
import News3 from "../../assets/images/news3.jpg";
import News4 from "../../assets/images/news4.jpg";
import News5 from "../../assets/images/news5.jpg";

function GallerySection() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">News</p>
        <h2 className="h2 section-title">
          Sampainya Jamaah Annisa Travel di Mekkah
        </h2>
        <p className="section-text">
          Saat tiba di Mekkah, jamaah Annisa Travel disambut dengan penuh
          kehormatan dan kenyamanan. Kami memastikan setiap langkah perjalanan
          ibadah mereka berjalan lancar, aman, dan penuh berkah.
        </p>

        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={News1} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={News2} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={News5} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={News3} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={News4} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
