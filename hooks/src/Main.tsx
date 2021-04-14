import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;
function Main({ match, history, location }: Props): JSX.Element {
  console.log(match);
  console.log(history);
  console.log(location);
  return (
    <div>
      <Link to="/useState/counter">useState : Counter</Link>
      <Link to="/useState/myform">useState : MyForm</Link>
    </div>
  );
}

export default Main;
