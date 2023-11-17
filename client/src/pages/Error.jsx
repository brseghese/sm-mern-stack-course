import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log('🚀 ~ file: Error.jsx:5 ~ Error ~ error:', error);

  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/'>back home</Link>
    </div>
  );
};

export default Error;
