import "./App.css";
import { useGetWelcomeMessageQuery } from "./features/api/apiSlice";

function App() {
  const { data, isSuccess } = useGetWelcomeMessageQuery();
  let welcomeMessage = <p>Awaiting response from backend...</p>;
  if (isSuccess) {
    welcomeMessage = <p>{data.message}</p>;
  }

  return (
    <div className="App">
      <header className="App-header">{welcomeMessage}</header>
    </div>
  );
}

export default App;
