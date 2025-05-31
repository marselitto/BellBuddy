import React, { useState, useEffect } from 'react';
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
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showClock, setShowClock] = useState(true);
    const [showStudentList, setShowStudentList] = useState(true);
    const [showAddForm, setShowAddForm] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                <button onClick={() => setShowStudentList(!showStudentList)}>
                    {showStudentList ? 'Ukryj listę uczniów' : 'Pokaż listę uczniów'}
                </button>
                <button onClick={() => setShowAddForm(!showAddForm)}>
                    {showAddForm ? 'Ukryj formularz' : 'Pokaż formularz'}
                </button>
            </div>

            {showClock && <Clock currentTime={currentTime} />}

            {showStudentList && (
                <StudentList
                    students={students}
                    onToggleAttendance={toggleAttendance}
                    onDeleteStudent={handleDeleteStudent}
                />
            )}

            {showAddForm && (
                <AddStudentForm
                    newStudentName={newStudentName}
                    onNewStudentNameChange={setNewStudentName}
                    onAddStudent={handleAddStudent}
                />
            )}

            <Stats students={students} />
        </div>
    );
};

export default App;