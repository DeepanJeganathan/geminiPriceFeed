
import './App.css';
import { useEffect, useState } from 'react'
import Data from './components/Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';

const url = 'https://api.gemini.com/v1/pricefeed';
function App() {



  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);


  function GetFeed() {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data); 
        console.log(data)   
      })
      .catch(err =>{ setIsLoading(false); setIsError(true)});
  }

  useEffect(() =>  GetFeed() , [])

  if(isLoading){
    return (
      <div className="App">
  <h1>Loading........</h1>
      </div>
    );
  }

  if(isError){
    return (
      <div className="App">
  <h1>oops there was an Error</h1>
      </div>
    );
  }
  
  return (
    <Container className="App container">

<Row>
<Data data={data} />
  </Row>

  </Container>
    
  );
  
}

export default App;
