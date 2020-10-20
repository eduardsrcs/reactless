const user = {
  firstName: 'Varius',
  lastName: 'Perez',
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
};

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {user.fullName()}!</h1>;
    // return <h1>Hello, {this.props.name}!</h1>;
  }
}

class Time extends React.Component{
  
  render() {
    return(
    <div>
      It is {new Date().toLocaleString()}.
    </div>
    )
  }
}

function Paused (props){
  return(
    <span>
      <a href={props.art} target="_blank">{props.name}</a>.
    </span>
  )
}

function PausedList (){
  return(
    <div>
      <h3>Links from docs</h3>
      <ul>
        <li>
          <Paused art="https://reactjs.org/docs/components-and-props.html" name="Components and Props"/>
        </li>
      </ul>
    </div>
  )
}

function tickk(el){
  ReactDOM.render(
    el,
    document.getElementById('root')
  );
}

setInterval(() => {
  const element = (
    <div>
      <Welcome name="Varius" />
      <Time />
      <PausedList />
    </div>
  );
  tickk(element)
}, 1000);