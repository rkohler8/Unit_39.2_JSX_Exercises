function App() {
  return (
    <div>
      <Person
        name="Joe"
        age={25}
        hobbies={["Hiking", "Skiing", "Running"]}
      />
      <Person
        name="Brian"
        age={58}
        hobbies={["Flying", "Sailing", "Swimming"]}
      />
      <Person
        name="Johnathan"
        age={16}
        hobbies={["Tweeting", "Jogging", "Sitting"]}
      />
    </div>
  );
}