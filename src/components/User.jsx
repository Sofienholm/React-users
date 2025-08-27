import { useEffect, useState } from "react";
export default function User({ user }) {
  const [Likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    if (Likes === 10) alert("Du har fået 10 likes!");
  }, [Likes]);

  return (
    <div className="user-card">
      <img src={user.image} alt={name} className="user-img" />
      <h2>{user.name}</h2>
      <p>Mail: {user.mail}</p>
      <p>{user.title}</p>
      {showDetails && (
        <div>
          <small>{user.id}</small>
        </div>
      )}
      <div className="btns">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Skjul" : "Vis"} detaljer
        </button>
        <button onClick={() => setLikes(Likes + 1)}>Like</button>
        <button onClick={() => setLikes(0)}>Reset Likes</button>
      </div>

      <p>Likes: {Likes}</p>
    </div>
  );
}
