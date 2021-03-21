import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient/client';
import Typography from '@material-ui/core/Typography';

// components
import Layout from './components/Layout';
import CurrencyList from './components/CurrencyList';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <div style={{ marginTop: 20 }}>
          <Typography variant="h5">{`Query currency rates in real time!`}</Typography>
        </div>
        <CurrencyList />
      </Layout>
    </ApolloProvider>
  );
}

export default App;

