import React from 'react';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

interface StudentItemProps {
    student: Student;
    onToggleAttendance: (id: number) => void;
    onDeleteStudent: (id: number) => void;
}

const StudentItem: React.FC<StudentItemProps> = ({
                                                     student,
                                                     onToggleAttendance,
                                                     onDeleteStudent,
                                                 }) => {
    return (
        <li className={`student-item ${student.present ? 'present' : 'absent'}`}>
            <span>{student.name}</span>
            <div className="student-actions">
                <button
                    onClick={() => onToggleAttendance(student.id)}
                    className={student.present ? 'present' : 'absent'}
                >
                    {student.present ? 'Obecny' : 'Nieobecny'}
                </button>
                <button
                    onClick={() => onDeleteStudent(student.id)}
                    className="delete"
                >
                    Usuń
                </button>
            </div>
        </li>
    );
};

export default StudentItem;