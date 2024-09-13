import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'items1', description: 'description 1' },
    { id: 2, name: 'items2', description: 'description 2' },
    { id: 3, name: 'items3', description: 'description 3' },
  ];

  const handlebuttonclick = (id) => {
    navigate(`items/${id}`);
  };

  return (
    <div>
      <h1>home Page</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>desciption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handlebuttonclick(item.id)}>
                    click me
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
