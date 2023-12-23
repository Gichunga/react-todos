function TodoRowItem(props) {
    return (
        <tbody>
            <tr>
                <th scope='row'>{props.Id}</th>
                <td>{props.rowDescription}</td>
                <td>{props.rowAssigned}</td>
            </tr>
        </tbody>
    );
}

export default TodoRowItem;