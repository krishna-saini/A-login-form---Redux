import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "" || country === "") {
      setErrorMessage("Please enter a username, password, and select a country");
    } else {
      // Login logic goes here (e.g., sending a request to a server)

      // Clear the form and error message
      setUsername("");
      setPassword("");
      setCountry("");
      setErrorMessage("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">Please select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div id="error-message">{errorMessage}</div>
    </form>
  );
}

export default App;
