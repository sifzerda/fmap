import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Hrefs from './components/Hrefs';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import useFootnoteStore from './utils/footnoteStore.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// subjects //

function App() {

  const location = useLocation();
  const resetCounter = useFootnoteStore((state) => state.resetCounter);

  // Reset counter when location changes (page navigation)
  useEffect(() => {
    resetCounter();
  }, [location, resetCounter]);

  return (
    <ApolloProvider client={client}>
      <>
        <header className="header">
          <Header />
          <Navigation />
        </header>

        <div className="bucket-app">
          <aside className="sidebar">
             <Hrefs /> 
            {/* <Subjects /> */}
          </aside>

          <main className="main-content mx-3">
            <Outlet />
          </main>
        </div>

        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;
