import {Component} from "react"


class Form extends Component{
state = {
    name: "",
    number: "",  
}

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

handleSubmit = (e) => {
    e.preventDefault();
    this.props.propOnSubmit({...this.state})
    this.reset()

};

reset = () => {
    this.setState({ name: "", number: "" });
  };

render(){
    const{name, number} = this.state;
    return(
        <form onSubmit={this.handleSubmit}>
    <label>
      Name <br />
      <input
        type="text"
        name="name"
        onChange={this.handleChange}
        value={name}
      ></input>
      <br />
    </label>
    <label>
      Number
      <br />
      <input
        type="number"
        name="number"
        value={number}
        onChange={this.handleChange}
      ></input>
    </label>
    <br />
    <button type="submit">Add</button>
  </form>  
    )
    
}
}

export default Form;