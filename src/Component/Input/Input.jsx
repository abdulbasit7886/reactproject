import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";


function InputText() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState([]);
  let id = 1;
  const Deletecard = (x) => {
    let value = x.name
    setSubmitted(submitted.filter(x => x.name !== value))   
}

  let GetValue = (event) => {
    setName(event.target.value);
  };
  let SetValue = (e) => {
    e.preventDefault();
    setSubmitted([
      ...submitted,
      { id: Math.floor(Math.random()*1000), name: name, attributes:[] }
    ]);
    setName("");
    console.log(submitted)
  };

  return (
    <div style={{ color: "black" }}>
      <h1>{name}</h1>
      <form onSubmit={SetValue}>
        <TextField
          id="standard-basic"
          label="Input Data"
          variant="standard"
          value={name}
          onChange={(e) => {
          GetValue(e);
          }}
        />
      </form>
      {submitted.map((x,i) => (
        <>
        <form onSubmit={SetValue}>
        <Chip label={x.name} key={i} onDelete={()=>{Deletecard(x)}} />
        <TextField
        id={i}
        label="Input Data"
        variant="standard"
        value={x.name.attributes}
        onChange={(e) => {
        GetValue(e);
        }}
      />
            </form>

              </>

      ))}
    </div>
  );
}

export default InputText;
















// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch(action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// };

// function Input() {
//   count [count,dispatch] = useReducer(reducer,initialState);

//   return ( <div>
//     <h1>VALUE - {count}</h1>
//     <button onClick={()=> dispatch('increment')}>
//       increment
//     </button>
//   </div> );
// }

// export default Input;

// count [count , dispatch]
// import React, { Component, useContext } from "react";
// import {userContext} from '../../App'

// function Input() {
//   const user = useContext(userContext)
//   return ( <div style={{color:'black'}}>
//   <h1>hello {user}</h1>

//   </div> );
// }

// export default Input;
// class Input extends Component {
// //
//   render() {
//     return (
//       <>
//       <h1 style={{color:'black'}}>Input Component</h1>

//       <userContext.Consumer>
//         {
//           (user)=>{
//             return(
//               <>
//               <h1 style={{color:'black'}}>{user}</h1>
//               </>
//             )
//           }
//         }
//       </userContext.Consumer>
//       </>

//     );
//   }
// }

// export default Input;

// state = {
//   value: [
//     {
//       value: "cm",
//     },
//   ],
// };

// <>
// {
// this.state.value.map((x, i) => {
// <Box
// component="form"
// sx={{
// "& > :not(style)": { m: 1, width: "25ch" },
// }}
// noValidate
// autoComplete="off"
// >

// <TextField id={i} label="Outlined" variant="outlined" value={x.value} />;

// </Box>
// }) }
// <button value={23} onClick={this.Addvalue}></button>
// </>
