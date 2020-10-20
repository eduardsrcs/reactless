const listItems = paused.map((el, index)=>(
  <li key={index}><Paused item={el}/></li>
))

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {user.fullName()}!</h1>;
    // return <h1>Hello, {this.props.name}!</h1>;
  }
}


function Paused (props){
  console.log(props)
  return(
    <div>
      <a href={props.item.art} target="_blank">{props.item.name}</a>. {props.item.desc}<br /><span className="green">{props.item.tm}</span>
    </div>
  )
}

function PausedList (){
  return(
    <div className="pausedlist">
      <h3>Links from docs</h3>
      <ul>{listItems}</ul>
    </div>
  )
}

function tickk(el){
  ReactDOM.render(
    el,
    document.getElementById('root')
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <p>It is <span className="grey">{this.state.date.toLocaleTimeString()}</span>.</p>
    );
  }
}

setInterval(() => {
  const element = (
    <div>
      <Welcome name="Varius" />
      <Clock />
      <PausedList />
    </div>
  );
  tickk(element)
}, 1000);