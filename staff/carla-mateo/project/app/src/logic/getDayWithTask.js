import errors, { SystemError } from 'com/errors'

const getDayWithTask = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/getdaywithtasks`, {

        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(() => { throw new SystemError('conection error') })
        .then(response => {
            if (response.status === 200) {
                return response.json()
                    .catch(() => { throw new SystemError('conection error') })
                    .then(tasks => tasks)
            }

            return response.json()
                .catch(() => { throw new SystemError('conection error') })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

export default getDayWithTask