import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import StudentList from './components/StudentList/StudentList';
import AddStudentForm from './components/AddStudentForm/AddStudentForm';
import Stats from './components/Stats/Stats';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

const App: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [newStudentName, setNewStudentName] = useState('');
    const [showClock, setShowClock] = useState(true);

    const handleAddStudent = (e: React.FormEvent) => {
        e.preventDefault();
        if (newStudentName.trim() === '') return;

        const newStudent: Student = {
            id: Date.now(),
            name: newStudentName,
            present: false,
        };

        setStudents([...students, newStudent]);
        setNewStudentName('');
    };

    const toggleAttendance = (id: number) => {
        setStudents(
            students.map((student) =>
                student.id === id ? { ...student, present: !student.present } : student
            )
        );
    };

    const handleDeleteStudent = (id: number) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div className="app">
            <h1>BellBuddy</h1>
            <p className="subtitle">System zarządzania klasą</p>

            <div className="controls">
                <button onClick={() => setShowClock(!showClock)}>
                    {showClock ? 'Ukryj zegar' : 'Pokaż zegar'}
                </button>
            </div>

            {showClock && <Clock showDate={true} />}

            <StudentList
                students={students}
                onToggleAttendance={toggleAttendance}
                onDeleteStudent={handleDeleteStudent}
            />

            <AddStudentForm
                newStudentName={newStudentName}
                onNewStudentNameChange={setNewStudentName}
                onAddStudent={handleAddStudent}
            />

            <Stats students={students} />
        </div>
    );
};

export default App;