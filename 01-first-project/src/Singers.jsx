export default function Singers({ singer }) {
  const { name, age, musicGenre } = singer;
  return (
    <div className="bg-gray-800 p-5 rounded-2xl m-5 text-start">
      <h3>Name: {name} </h3>

      <p>Age: {age}</p>

      <p>Genre: {musicGenre}</p>
    </div>
  );
}
