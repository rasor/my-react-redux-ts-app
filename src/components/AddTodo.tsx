// https://codesandbox.io/s/9on71rvnyo?file=/src/components/AddTodo.js
import React from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { input: "" };
//   }

//   updateInput = (input: any) => {
//     this.setState({ input });
//   };

//   handleAddTodo = () => {
//     this.props.addTodo(this.state.input);
//     this.setState({ input: "" });
//   };

  render() {
    return (
      <div>
         {/* <input
           onChange={e => this.updateInput(e.target.value)}
           value={this.state.input}
         />
         <button className="add-todo" onClick={this.handleAddTodo}>
           Add Todo
         </button> */}
       </div>
     );
   }
}

// export default connect(
//   null,
//   { addTodo }
// )(AddTodo);
export default AddTodo;
