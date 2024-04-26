import React, { useEffect, useState } from "react";
import userService from "../services/UserService";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const ViewUser = (props) => {
  const [id, setId] = useState(props?.match?.params?.id);
  const [user, setUser] = useState({});
  let params = useParams();
  useEffect(() => {
    console.log(params);
    userService.getUserById(params.id).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View User Details</h3>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div class="col">
                <label> User First Name: </label>
                <div> {user.firstName}</div>
              </div>
            </div>
            <div className="row">
              <label> User Last Name: </label>
              <div> {user.lastName}</div>
            </div>
            <div className="row">
              <label> User Hobby: </label>
              <div> {user.hobby}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewUser;
