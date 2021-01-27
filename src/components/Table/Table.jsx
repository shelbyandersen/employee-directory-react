import React from 'react';

const Table = () => {
    return (
        <table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1812728384947</th>
      <td><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg"></img></td>
      <td>Steven Sheikn</td>
      <td>steven@test.com</td>
      <td>800-555-5555</td>
    </tr>
  </tbody>
</table>
    );
};

export default Table;