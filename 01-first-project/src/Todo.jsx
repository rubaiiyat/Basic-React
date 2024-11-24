export default function Todo(params) {
  const { task, isDone } = params;

  if (isDone) {
    return (
      <p className="text-pink-500 text-start">
        <span className="text-green-500">Going On: </span>
        {task}{" "}
      </p>
    );
  } else {
    return (
      <p className="text-pink-500 text-start">
        <span className="text-red-500">It's Paused: </span>
        {task}{" "}
      </p>
    );
  }
}
