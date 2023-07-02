import "./Me.css";
import pro from "../../../public/team.svg";
export default function Me() {
  return (
    <>
      <div className="about__me">
        <div className="about__me__info">
          <h1>Soy Christian Gallegos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro
            id ducimus rem esse ea animi, aperiam explicabo laboriosam nemo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            minima!
          </p>
        </div>
        <div className="about__me__image">
          <img src={pro} alt="BACK" width="300px" />
        </div>
      </div>
    </>
  );
}
