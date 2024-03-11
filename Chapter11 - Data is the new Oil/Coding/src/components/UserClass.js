import React from 'react';
import UserSubClass from './UserSubClass';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Guest',
        location: 'Default',
      },
    };

    // console.log(this.props.name + 'Child Construtor');
  }

  async componentDidMount() {
    // console.log(this.props.name + 'Child Component Did Mount');
    const data = await fetch('https://api.github.com/users/Ruvaim');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log('Set Interval Is Running');
    }, 1000);

    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update Called');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Unmounted');
  }

  render() {
    // console.log(this.props.name + 'Child Render');

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: IG|ruvaimkashimji</h4>
      </div>
    );
  }
}

export default UserClass;
