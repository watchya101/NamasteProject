import React from "react";

class UserClass extends React.Component {
  //constructor will receive the props here and we need to use super keyword
  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
        count: 0,
        count1: 2,
    };

  }
  componentDidMount(){
    console.log("Child component DId Mount")
  }
  render() {
    const{name} = this.props;
    const {count} = this.state;
    console.log("Child rendered");
    return (
      <div className="user-card border-4 border-black p-5">
        <h1>Count:{count}</h1>
        <button  className="border border-solid-black rounded-lg px-2 m-1 bg-gray-200"onClick={() => {
          this.setState({
            count: this.state.count + 1,
          })
        } }>Button</button>
        <h2>Name : {name}</h2>
        <h3>Location : Mumbai</h3>
        <h3>Contact : watchya </h3>
      </div>
    );
  }
}

export default UserClass;
