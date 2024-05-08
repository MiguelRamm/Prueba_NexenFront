import React from 'react';

const TablaUsuarios = ({ usuarios }) => {
  return (
    <div className="container">
      <h1>Tabla de Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre de usuario</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Edad</th>
            <th scope="col">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id}>
              <th scope="row">{index + 1}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.fecha_nacimiento}</td>
              <td>{usuario.edad}</td>
              <td>{`${usuario.domicilio.domicilio}, ${usuario.domicilio.numero_exterior}, ${usuario.domicilio.colonia}, ${usuario.domicilio.cp}, ${usuario.domicilio.ciudad}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;



