import TodoForm from './TodoForm';
import style from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={style.TodoList}>
        {this.props.data.map(item => (
          <span>
            {item.text}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </span>
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  remove: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default Todo;

