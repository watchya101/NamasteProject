import React from "react";

class UserClass extends React.Component {
  //constructor will receive the props here and we need to use super keyword
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Mumbai</h3>
        <h3>Contact : watchya </h3>
      </div>
    );
  }
}

export default UserClass;
