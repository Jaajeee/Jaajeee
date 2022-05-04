const inputData = ({ data, onEdit, onDelete}) => {

    const handleClick = (e) => {
        if (e.target.className === 'edit-btn') {
            onEdit(e.target.id);
        }
        if (e.target.className === 'delete-btn') {
            onDelete(e.target.id);
        }
    };
    return data.map((items, index) => {
        return (
            <tr key={index}>
                <td>{items.name}</td>
                <td>{items.description}</td>
                <td>{items.selectList}</td>
                <td>{items.kilocalories}</td>
                <td>{items.Timestamp}</td>
                <td>{items.hour}</td>
                <td>{items.minute}</td>
                <td>
                    <button id={index} className="edit-btn" onClick={handleClick}>Edit</button>
                    <button id={index} className="delete-btn" onClick={handleClick}>Delete</button>
                </td>
            </tr>
        );
    });
    };
    export default inputData;