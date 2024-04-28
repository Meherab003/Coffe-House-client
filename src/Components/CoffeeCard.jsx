import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl my-5 w-11/12 mx-auto">
      <figure className="w-1/2">
        <img className="w-full object-cover" src={coffee.photo} alt="Movie" />
      </figure>
      <div className="card-body flex-row">
        <div className="flex-grow">
          <h2 className="card-title">{coffee.name}</h2>
          <div>
            <p>Details: {coffee.details}</p>
            <p>Quantity: {coffee.quantity}</p>
            <p>Taste: {coffee.taste}</p>
            <p>Supplier: {coffee.supplier}</p>
            <p>Category: {coffee.category}</p>
          </div>
        </div>
        <div className="join join-vertical space-y-5">
          <button className="btn join-item">View</button>
          <Link to={`/addCoffee/${coffee._id}`} className="btn join-item">
            <button>Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(coffee._id)}
            className="btn join-item bg-red-600 text-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
