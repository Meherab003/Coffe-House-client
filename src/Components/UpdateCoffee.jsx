import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //send data to the server
    fetch('http://localhost:5000/coffee', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  };
  return (
    <div className="border w-11/12 mx-auto my-5 rounded-3xl">
      <h2 className="text-center text-5xl text-primary font-semibold mt-4">
        Add Coffee
      </h2>
      <form onSubmit={handleAddCoffee} className="card-body">
        <div className="flex gap-3 w-full">
          <div className="form-control w-full">
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="form-control w-full">
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="form-control w-full">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="photo"
            placeholder="Photo"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
