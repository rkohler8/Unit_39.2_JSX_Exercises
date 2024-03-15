function App() {
  return (
    <div>
      <Tweet
        username="jo22"
        name="Joe"
        date={new Date().toDateString()}
        message="Tweet 1"
      />
      <Tweet
        username="brian33"
        name="Brian"
        date={new Date().toDateString()}
        message="Tweet 2"
      />
      <Tweet
        username="john55"
        name="John"
        date={new Date().toDateString()}
        message="Tweet 3"
      />
    </div>
  );
}