const Header = (props) => {
  return (
  <>
    <h1> {props.course.name} </h1>
  </>

  )
}

const Content = (props) => {
  return (
  <>
    <Part part={props.part[0].name} exercise={props.part[0].exercises} />
    <Part part={props.part[1].name} exercise={props.part[1].exercises} />
    <Part part={props.part[2].name} exercise={props.part[2].exercises} />
  </>
  ) 
}

const Part = (props) => {
  return (
  <>
    <p>
      {props.part} {props.exercise}
    </p>
  </>

  ) 
}
const Total = (props) => {
  return (
  <>
    <p> Number of exercises {props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises} </p>
  </>

  ) 
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total exercise={course.parts}/>
    </div>
  )
}

export default App