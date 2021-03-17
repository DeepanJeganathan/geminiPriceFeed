import { Button,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Data({data}){

    function HandleDelete(id){
        // data.filter(token=> token.key)
        console.log(id)
    }

function DisplayFeed(data){
  return data.map((ticker,i)=><div key={i} className="col-md-6 d-inline"><h4>{ticker.pair}</h4> <h3>{ticker.price}</h3> <button type="button" onClick={HandleDelete} className="btn btn-danger">delete</button> </div>)
}

return(
<>
<h1 className="col-12 display-4">Tokens</h1>
{DisplayFeed(data)}
</>
);
}

export default Data;
