function Tweet(props) {
  return (
    <div className="tweet">
      <span>@{props.username}</span>
      <span>{props.name}</span>
      <span>{props.date}</span>
      <p>{props.message}</p>
    </div>
  );
}