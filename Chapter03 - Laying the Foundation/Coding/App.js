import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement('h1', '', 'H1 Element');
const h2 = React.createElement('h2', '', 'H2 Element');
const h3 = React.createElement('h3', '', 'H3 Element');
const h4 = React.createElement('h4', '', 'H4 Element');

const heading = React.createElement('div', { class: 'title' }, [
  h1,
  h2,
  h3,
  h4,
]);
const headingjsx = (
  <div className="title">
    <h1>H1 Element</h1>
    <h2>H2 Element</h2>
    <h3>H3 Element</h3>
  </div>
);

const HelloComponent = () => {
  return <h1>Hello</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="title">
      <HelloComponent />
      <h2>H2 Element</h2>
      <h3>H3 Element</h3>
    </div>
  );
};

const HeaderComponentJsx = () => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img
        src="https://media.licdn.com/dms/image/D4D12AQFJS29ph_gYjA/article-inline_image-shrink_1500_2232/0/1700370062223?e=1712793600&v=beta&t=nhlY-Tv8KB8DyqSxWqf9QeJGZj43tw-wUMNzGnt_Rxw"
        alt="logo"
        className="logo"
        height={50}
        width={50}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="user"
          height={10}
          width={20}
        />
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        alt="user"
        className="user"
        height={50}
        width={50}
      />
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponentJsx />);
