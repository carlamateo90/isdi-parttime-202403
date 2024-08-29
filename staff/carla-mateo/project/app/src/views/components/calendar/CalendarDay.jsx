
import { useEffect, useState } from 'react'

const CalendarDay = ({ day, className, taskDates, isToday, isPastTask, handleShowTasks, currentDate }) => {
    const [hasTasks, setHasTasks] = useState(false)

    const checkHasTasks = () => { setHasTasks(taskDates.includes(currentDate)) }

    useEffect(() => {
        if (taskDates && taskDates.length > 0) {
            checkHasTasks()
        }

    }, [taskDates])

    return (
        <>
            {hasTasks ? (
                <button
                    onClick={handleShowTasks(new Date(currentDate))}
                    className={`${className} calendar-day-with-tasks ${isToday ? 'calendar-day-today' : ''} ${isPastTask ? 'calendar-day-past-task' : ''}`}
                >
                    {day}
                </button>
            ) : (
                <div
                    className={`${className} calendar-day ${isToday ? 'calendar-day-today' : ''} ${isPastTask ? 'calendar-day-past-task' : ''}`}
                >
                    {day}
                </div>
            )}
        </>
    )
}

export default CalendarDay