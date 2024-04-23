import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
      <ul>
        {Object.keys(ROUTES).map((routeKey) => (
          <li key={routeKey}>
            <Link to={ROUTES[routeKey as keyof typeof ROUTES]}>
              {routeKey}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
