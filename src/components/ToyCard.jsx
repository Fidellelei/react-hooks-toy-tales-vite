import React from "react";

function ToyCard({ toy, setToys }) {

  function handleDelete() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE"
    }).then(() => {
      setToys(prev => prev.filter(t => t.id !== toy.id));
    });
  }

  function handleLike() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
      .then(res => res.json())
      .then(updatedToy => {
        setToys(prev =>
          prev.map(t =>
            t.id === updatedToy.id ? updatedToy : t
          )
        );
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img src={toy.image} alt={toy.name} />

      <p>{toy.likes} Likes </p>

      <button onClick={handleLike}>
        Like &lt;3
      </button>

      <button onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;