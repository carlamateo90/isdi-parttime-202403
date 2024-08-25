import 'dotenv/config'
import logic from '../logic/index.js'
import jwt from '../utils/jsonwebtoken-promised.js'
import { CredentialsError } from 'com/errors.js'

const { JWT_SECRET } = process.env

export default ((req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const { sub: userId } = payload

                const { date } = req.params
                try {
                    const parsedDate = new Date(date)
                    logic.getTasksForDate(userId, parsedDate)
                        .then((tasks) => {
                            res.json(tasks)
                        })
                        .catch(error => next(error))
                } catch (error) {
                    next(error)
                }
            })
            .catch(error => next(new CredentialsError(error.message)))
    } catch (error) {
        next(error)
    }
})