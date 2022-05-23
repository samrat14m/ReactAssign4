import React from "react";

const Students = () => {
  return (
    <div className="home">
      <h1 style={{ textDecoration: "underline", marginBottom: "5vh" }}>
        Student Details
      </h1>
      <table class="table table-secondary table-bordered table-hover">
        <thead>
          <tr class=" table table-primary table-striped-columns">
            <th scope="col">S/N</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Social Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row">1</th>
            <td>Saurabh</td>
            <td>Maurya</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Rakesh</td>
            <td>Kumar</td>
            <td>@facebook</td>
          </tr>
          <tr className="table-light">
            <th scope="row">3</th>
            <td>AkashDeep</td>
            <td>Rajput</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Kuldeep</td>
            <td>Tyagi</td>
            <td>@twitter</td>
          </tr>
          <tr className="table-light">
            <th scope="row">5</th>
            <td>Krishna</td>
            <td>Mishra</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Divyansh</td>
            <td>Kohli</td>
            <td>@instagram</td>
          </tr>
          <tr className="table-light">
            <th scope="row">7</th>
            <td>Ashutosh</td>
            <td>Dwibedi</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Ankita</td>
            <td>Kaushik</td>
            <td>@facebook</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Students;
