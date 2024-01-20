const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}



const Part = (prop) => {
  return (
  <div>
    <p>
      {prop.name} {prop.number}
    </p>
  </div>
  )
}



const Total = () => {
  const exercises1 = 10
  const exercises2 = 7  
  const exercises3 = 14
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Header course= "Full Stack Open" />
      <Part name = "Fundamentals of React"  number = "10"/>
      <Part name = "Using props to pass data"  number = "7"/>
      <Part name = "State of a component"  number = "14"/>
      <Total />
    </div>
  )
}

export default App