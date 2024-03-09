import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);

    // console.log('Parent Construtor');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={'Ruvaim(Functional)'} /> */}
        <UserClass name={'First(Class)'} location={'Bhatkal(Class)'} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name={'Ruvaim(Functional)'} />
//       <UserClass name={'Ruvaim(Class)'} location={'Bhatkal(Class)'} />
//     </div>
//   );
// };

export default About;
