import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Paris", "Tokyo", "Hong Kong"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
