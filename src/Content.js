import "./styles.css";
import RandomFactButton from "./RandomFactButton";
import luffySmile from "./img/luffySmile.png";

export default function Content({ data, setData }) {
  return (
    <div className="container">
      <div className="info">
        Welcome to the One Piece Facts website! The following facts are pulled
        from a free API with no authentication required. Feel free to click the
        button below to get to know some cool facts!
      </div>
      <div class="image">
        <div class="behindluffy">Monkey D. Luffy</div>
        <img src={luffySmile} alt="luffy smile"></img>
      </div>
      <div className="button">
        <RandomFactButton setData={setData}></RandomFactButton>
      </div>
      <div className="fact">{data?.data?.fact}</div>
    </div>
  );
}
