import React, { useEffect, useState } from "react";
import userService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

const UserList = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);
  const deleteUser = (id) => {
    userService.deleteUser(id).then((res) => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };
  const viewUser = (id) => {
    navigate(`/view-user/${id}`);
  };
  const editUser = (id) => {
    //useHistory.push(`/add-user/${id}`);
  };

  const addUser = () => {
    navigate("/add-user/_add");
  };
  return (
    <div>
      <h2 className="text-center">users List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addUser}>
          {" "}
          Add user
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> user First Name</th>
              <th> user Last Name</th>
              <th> user Hobby</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td> {user.firstName} </td>
                <td> {user.lastName}</td>
                <td> {user.hobby}</td>
                <td>
                  <button
                    onClick={() => this.edituser(user.id)}
                    className="btn btn-info"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewUser(user.id)}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
