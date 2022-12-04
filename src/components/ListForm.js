import { useState } from "react";

const ListForm = ({ addTask }) => {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newTask = {
            id: crypto.randomUUID(),
            title: form.title.value,
            date: form.date.value,
            infos: form.infos.value,
            editable: false
        };
        if (newTask.title && newTask.date && newTask.infos) {
            addTask(newTask);
            setError('');
            form.reset();
        }
        else {
            setError("Frérot fait un effort met des trucs dans les cases...");
        }
    }

    const getInputForm = (name, placeholder, type = 'text') => {
        return (
            <div className="form-floating form-group m-3">
                <input
                    id={name}
                    name={name}
                    type={type}
                    step={type === 'date' ? 'any' : ''}
                    autoComplete='off'
                    className="form-control"
                    placeholder={placeholder} />
                <label
                    htmlFor={name}
                    className="form-label">
                    {placeholder}
                </label>
            </div>
        );
    }
    return (
        <>
            <div className={`alert alert-danger mb-0 ${error ? '' : 'd-none'}`}>
                {error}
                <button
                    onClick={() => setError('')}
                    className="btn btn-close">
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="text-center form-container container my-4"
                style={{ maxWidth: '500px' }}>
                <div className="title">Liste des tâches</div>
                {getInputForm('title', 'Titre de la tache')}
                {getInputForm('date', 'Date de la tache', 'date')}
                {getInputForm('infos', 'Description')}
                <button
                    type="submit"
                    className="btn">
                    Ajouter
                </button>
            </form>
        </>
    );
};

export default ListForm;