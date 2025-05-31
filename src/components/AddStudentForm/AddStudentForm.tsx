import React from 'react';
import './AddStudentForm.css';

interface AddStudentFormProps {
    newStudentName: string;
    onNewStudentNameChange: (name: string) => void;
    onAddStudent: (e: React.FormEvent) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({
                                                           newStudentName,
                                                           onNewStudentNameChange,
                                                           onAddStudent,
                                                       }) => {
    return (
        <div className="add-student-form">
            <h2>Dodaj nowego ucznia</h2>
            <form onSubmit={onAddStudent}>
                <input
                    type="text"
                    value={newStudentName}
                    onChange={(e) => onNewStudentNameChange(e.target.value)}
                    placeholder="Imię ucznia"
                />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddStudentForm;