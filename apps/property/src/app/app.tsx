// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import React from 'react';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  // Retrieve the API_KEY from the environment variables
  const apiKey = process.env.REACT_APP_API_KEY;

  if (!apiKey) {
    console.error('API_KEY is not defined. Make sure it is set as an environment variable.');
  }

  return (
    <div>
      <NxWelcome title="property" />

      {/* Display the API Key */}
      <div style={{ margin: '20px 0', color: 'blue' }}>
        <strong>API Key:</strong> {apiKey || 'Not Defined'}
      </div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
