import React, { useEffect, useState } from "react";
import userService from "../services/UserService";
import { useNavigate } from "react-router-dom";
const CreateUser = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState(props?.match?.params?.id);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [hobby, setHobby] = useState(" ");

  useEffect(() => {
    if (id === "_add") {
      return;
    }
  }, []);
  // step 3
  const saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = { firstName: firstName, lastName: lastName, hobby: hobby };
    console.log("user => " + JSON.stringify(user));

    // step 5
    userService.createUser(user).then((res) => {
      navigate("/users");
    });
    /*else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }*/
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeHobbyHandler = (event) => {
    setHobby(event.target.value);
  };

  const cancel = () => {
    navigate("/users");
  };

  const getTitle = () => {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  };
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Hobby : </label>
                  <input
                    placeholder="Hobby"
                    name="hobby"
                    className="form-control"
                    value={hobby}
                    onChange={changeHobbyHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateUser}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
