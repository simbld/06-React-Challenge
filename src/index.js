import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const isDeletable = true;
const Contact = (props) => {
  console.log(props);
  return (
    <div className="friend-item">
      <h3 className="item">{props.name}</h3>
      <h4 className="item">📧<br/>{props.email}</h4>
      <h5 className="item">☎️<br/>{props.phone}</h5>
      {props.isDeletable ? (
        <button className="delete-btn">Delete</button>
      ) : null}
    </div>
  );
};

export const App = (
  <div className=".titre-container ">
    <h1 className="text-center">My contacts list 📱</h1>
    <div>
      <Contact
        name="Luke"
        email="L.skywalker@rebels.to"
        phone="777852536"
        isDeletable={true}
      />
      <Contact
        name="Yoda"
        email="yoda-i-am@master.dg"
        phone="777552365"
        isDeletable={false}
      />
      <Contact
        name="Vador"
        email="d.vador@angry.ds"
        phone="777951478"
        isDeletable={true}
      />
      <Contact
        name="R2-D2"
        email="bipbip@smartdroids.d2"
        phone="777745821"
        isDeletable={false}
      />
      <Contact
        name="Bobba"
        email="B.fett@mando.ml"
        phone="777985632"
        isDeletable={true}
      />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
