import './style.css';
const MyComponent = ()=>{
  //const hoidanit ="Eric" 
  // const hoidanit = 25
  const hoidanit ={
    name: "Hoi dan IT",
    age: 25
  }
  return (
      <> 
        <div> {JSON.stringify(hoidanit)} & hoi dan it update</div>
        <div>{console.log("ERIC")}</div>
        <div className= "child"
          style={{borderRadius: "10px"}}
        >child</div>
      </>
    );
  }
  export default MyComponent