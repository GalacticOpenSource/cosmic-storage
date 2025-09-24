import "./HeaderCenter.css";

function HeaderCenter() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const params = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(`http://localhost:3000/search?${params}`);

      const data = await response.json();
      console.log("Search results:", data);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <button type="submit" className="search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#0f0000ff"
            width="2vw"
            height="2vh"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
        <input
          type="text"
          name="q" // 👈 query string key (?q=yourInput)
          placeholder="Search in Cosmic"
          className="search-input"
        />
      </form>
    </div>
  );
}

export default HeaderCenter;
