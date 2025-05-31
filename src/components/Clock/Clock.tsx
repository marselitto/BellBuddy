import { useEffect, useState } from "react";
import './Clock.css';

interface ClockProps {
    showDate?: boolean;
}

const Clock: React.FC<ClockProps> = ({ showDate = true }) => {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            setDate(now.toLocaleDateString());
        }

        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h2>Aktualny czas:</h2>
            <p>{time}</p>
            {showDate && <p>{date}</p>}
        </div>
    );
};

export default Clock;