import { useState  } from "react";


function AddNumber() {
const [num1, setNum1] = useState();
const [num2, setNum2] = useState();
const [tot, setTot] = useState();



function  handlelick() {
    setTot(Number(num1) + Number(num2));
}


return (
<div >
    <h1>Adding Two Numbers</h1>
    
    <input type = "text" name = "num1" class = "form-control" onChange={(event) =>
    {
        setNum1(event.target.value);
    }}>
    </input>

     
    <input type = "text" name = "num2"   class = "form-control" onChange={(event) =>
    {
        setNum2(event.target.value);
    }}>
        </input>
        <label>Total</label>
        <input type="text" class="form-control" value= { tot }></input>
        <button onClick={handlelick}>CLick on me and figure out the summ!</button> 

</div>

);
}
export default AddNumber;