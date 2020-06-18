import React from 'react';
import ReactDOM from 'react-dom';

//returns react Element
const Index = (): JSX.Element => {
  return <div>Hello!</div>;
};

export default Index;

const root = document.getElementById('app-root');

ReactDOM.render(<Index />, root);
