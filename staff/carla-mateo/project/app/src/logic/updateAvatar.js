import validate from 'com/validate'
import errors, { SystemError } from 'com/errors'

const updateAvatar = (avatar) => {
    validate.avatar(avatar)

    return fetch(`${import.meta.env.VITE_API_URL}/avatar`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ avatar })
    })
        .catch(() => { throw new SystemError('server error') })
        .then(response => {
            if (response.status === 200) return

            return response.json()
                .catch(() => { throw new SystemError('server error') })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

export default updateAvatar