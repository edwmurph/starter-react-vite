import use_api from '../hooks/use-api';

function App() {
  const { data, loading, error } = use_api({ route: '/api/hello' });

  if ( loading ) {
    return <p>Loading...</p>;
  }

  if ( error ) {
    return ( <p>
      Error:
      {error}
    </p> );
  }

  return (
    <p>
      Data:
      {data}
    </p>
  );
}

export default App;
