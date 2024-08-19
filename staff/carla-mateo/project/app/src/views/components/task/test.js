
import logic from '../../../logic'

import View from '../../library/View'

import Heading from '../../../components/core/Heading'

import Time from '../../../components/core/Time'

import Button from '../../../components/core/Button'


function Task({ task, onTaskDeleted }) {
    const handleDeleteTask = () => {
        if (confirm('Delete task?'))
            try {
                logic.deleteTask(task.id)
                    .then(() => onTaskDeleted())
                    .catch(error => {
                        console.error(error)
                        alert(error.message)
                    })
            } catch (error) {
                console.error(error)
                alert(error.message)
            }
    }

    const formatDate = date => {
        if (!date) return ''
        const newDate = new Date(date);
        return newDate.toISOString().split('T')[0]
    }

    return <View>
        <div className='flex flex-col items-center space-y-0' >
            <div className="flex gap-2">
                <Heading level="2">{task.title}</Heading>
                <Heading level="1">{task.assignee ? task.assignee.username : ''}</Heading>
            </div>
            <Heading level="1">{task.description}</Heading>
            <time className="m-2">{formatDate(task.date)}</time>
            <Button onClick={handleDeleteTask}>Delete</Button>
        </div>
    </View>
}
export default Task