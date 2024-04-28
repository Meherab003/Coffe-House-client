import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
    const { createUser, loading} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        createUser(email, password)
        .then(res => {
            console.log(res.user)
            const createdAt = res.user.metadata.creationTime;
            const user = {email, createdAt};
            fetch('http://localhost:5000/user', {
                method: "POST", 
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert("user added to the data base")
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name= 'email'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name= "password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
