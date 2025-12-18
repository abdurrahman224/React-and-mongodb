import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const hendlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("user added successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>React + MongoDB </h1>

      <form onSubmit={hendlesubmit}>
        <input type="text" name="name" placeholder="naem" />
        <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="submit" value={"Add"} />
      </form>



         <button> <Link to="/users">Users</Link></button>
            {/* <Outlet/> */}
    </>
  );
}

export default App;
