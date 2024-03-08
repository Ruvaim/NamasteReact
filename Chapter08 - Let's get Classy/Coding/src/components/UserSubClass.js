import { Component } from 'react';

class UserSubClass extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + 'Sub Class Construtor');
  }

  componentDidMount() {
    console.log(this.props.name + 'Sub Class componentDidMount');
  }

  render() {
    console.log(this.props.name + 'Sub Class Render Method');

    return (
      <div className="user-card">
        <h2>Name: SUB Ruvaim</h2>
        <h4>Contact: IG|ruvaimkashimji</h4>
      </div>
    );
  }
}

export default UserSubClass;
