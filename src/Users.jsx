import { useLoaderData } from "react-router-dom";

const Users = () => {
  const userdata = useLoaderData();
  console.log(userdata);

  const hendleDelet = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
        }
      });
  };

  return (
    <div>
      <h1>Hello Users : {userdata.length}</h1>

      <div>
        {userdata.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <button onClick={() => hendleDelet(user._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
