import 'dotenv/config'
import logic from '../logic/index.js'
import jwt from '../util/jsonwebtoken-promised.js'



const { JWT_SECRET } = process.env

const authenticateUserHandler = (req, res, next) => {
    const { username, password } = req.body

    try {
        logic.authenticateUser(username, password)
            .then(userId =>
                jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '10d' })
                    .then(token => res.json(token))
                    .catch((error) => next(error))
            )
            .catch((error) => next(error))
    } catch (error) {
        next(error)
    }
}

export default authenticateUserHandler