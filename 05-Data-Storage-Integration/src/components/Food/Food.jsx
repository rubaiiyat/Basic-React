const Food = ({ food }) => {
  const { name, image, cookTimeMinutes, rating } = food;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-2xl border border-gray-900">
        <figure className=" ">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${cookTimeMinutes}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
