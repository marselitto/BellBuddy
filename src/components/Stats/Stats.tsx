import React from 'react';
import './Stats.css';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

interface StatsProps {
    students: Student[];
}

const Stats: React.FC<StatsProps> = ({ students }) => {
    return (
        <div className="stats">
            <p>Liczba uczniów: {students.length}</p>
            <p>
                Obecni: {students.filter((s) => s.present).length} / Nieobecni:{' '}
                {students.filter((s) => !s.present).length}
            </p>
        </div>
    );
};

export default Stats;