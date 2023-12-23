import TodoRowItem from './TodoRowItem';

function TodoTable(props){
    return (
        <table className='table table-bordered table-hover'>
            <thead className='table-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <TodoRowItem 
              rowNumber = {props.todoList[0].rowId}
              rowDescription = {props.todoList[0].rowDescription}
              rowAssigned = {props.todoList[0].rowUser}
            />

            <TodoRowItem 
              rowNumber = {props.todoList[1].rowId}
              rowDescription = {props.todoList[1].rowDescription}
              rowAssigned = {props.todoList[1].rowUser}
            />

            <TodoRowItem 
              rowNumber = {props.todoList[2].rowId}
              rowDescription = {props.todoList[2].rowDescription}
              rowAssigned = {props.todoList[2].rowUser}
            />
          </table>
    );
}

export default TodoTable;