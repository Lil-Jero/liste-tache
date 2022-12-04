import { useState } from 'react'

const List = ({ task, deleteBook, toggleEditTask, editTask }) => {

    const [title, setTitle] = useState(task.title)
    const [date, setDate] = useState(task.date)
    const [desc, setDesc] = useState(task.infos)

    const handleChange = (e, inputName) => {
        const inputValue = e.target.value
        switch (inputName) {
            case 'title': setTitle(inputValue); editTask(task.id, { title: inputValue }); return;
            case 'date': setDate(inputValue); editTask(task.id, { date: inputValue }); return;
            case 'desc': setDesc(inputValue); editTask(task.id, { infos: inputValue }); return;
        }
    }

    return (
        <tr>
            {task.editable ? (
                <>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e, 'title')}
                            value={title} />
                    </td>
                    <td>
                        <input
                            type="date"
                            onChange={(e) => handleChange(e, 'date')}
                            value={date} />
                    </td>
                    <td>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e, 'desc')}
                            value={desc} />
                    </td>
                </>
            ) : (
                <>
                    <td>{task.title}</td>
                    <td>{task.date}</td>
                    <td>{task.infos}</td>
                </>
            )}
            <td className="text-center">
                <a
                    onClick={toggleEditTask}
                    className="btn btn-sm btn-info me-1">
                    {task.editable ? '✔︎' : '✎'}
                </a>
                <a
                    onClick={deleteBook}
                    className="btn btn-sm btn-danger">✖︎</a>

            </td>
        </tr >
    );
};

export default List;