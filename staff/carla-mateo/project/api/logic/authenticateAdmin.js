import validate from 'com/validate.js'
import { User } from '../data/index.js'
import bcrypt from 'bcryptjs'
import { SystemError, CredentialsError, NotFoundError } from 'com/errors.js'

const authenticateAdmin = (username, password) => {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username }, { __v: 0 }).lean()
        .catch((error) => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }
            return bcrypt.compare(password, user.password)
                .catch(error => { throw new SystemError(error.message) })
                .then((match) => {
                    if (!match) {
                        throw new CredentialsError('wrong password')
                    }
                    return { id: user._id.toString(), role: user.role }
                })
        })
}

export default authenticateAdmin