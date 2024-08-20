import { Task, User } from '../data/index.js'
import { NotFoundError, SystemError, ContentError } from 'com/errors.js'
import validate from 'com/validate.js'

const createTask = (userId, assigneeUserId, title, description, date) => {
    validate.id(userId)

    if (assigneeUserId) {
        validate.id(assigneeUserId, 'assigneeUserId')
    }

    validate.text(title, 'title', 60)
    validate.text(description, 'description', 200)

    if (date) {
        if (!(date instanceof Date)) {
            throw new ContentError('invalid date format')
        }
    }

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            if (assigneeUserId) {


                return User.findById(assigneeUserId).lean()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(assigneeUser => {
                        if (!assigneeUser) throw new NotFoundError('assignee not found')

                        const task = {
                            family: user.family,
                            assignee: assigneeUserId,
                            title,
                            description,
                        }

                        if (date) task.date = date

                        return Task.create(task)
                            .catch(error => { throw new SystemError(error.message) })
                            .then(() => { })
                    })

            } else {
                const task = {
                    family: user.family,
                    title,
                    description,
                }

                if (date) task.date = date

                return Task.create(task)
                    .catch(error => { throw new SystemError(error.message) })
                    .then(() => { })
            }
        })
}


export default createTask