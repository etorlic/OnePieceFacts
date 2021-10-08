import "./styles.css";

export default function RandomFactButton({ setData }) {
  function getOnePieceFactFromServer() {
    const rand = Math.ceil(Math.random() * 25);
    const url = `https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece/${rand}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch(console.error);
  }

  return (
    <div>
      <button onClick={getOnePieceFactFromServer}>New Fact!</button>
    </div>
  );
}
