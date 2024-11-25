import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users: {users.length}</h1>

      <div className="flex flex-wrap gap-5 mt-5 mb-5 justify-center item-center">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </>
  );
}
