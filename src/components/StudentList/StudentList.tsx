import React from 'react';
import './StudentList.css';
import StudentItem from './StudentItem';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

interface StudentListProps {
    students: Student[];
    onToggleAttendance: (id: number) => void;
    onDeleteStudent: (id: number) => void;
}

const StudentList: React.FC<StudentListProps> = ({
                                                     students,
                                                     onToggleAttendance,
                                                     onDeleteStudent,
                                                 }) => {
    return (
        <div className="student-list">
            <h2>Lista uczniów</h2>
            {students.length === 0 ? (
                <p>Brak uczniów na liście</p>
            ) : (
                <ul>
                    {students.map((student) => (
                        <StudentItem
                            key={student.id}
                            student={student}
                            onToggleAttendance={onToggleAttendance}
                            onDeleteStudent={onDeleteStudent}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StudentList;