import errors, { SystemError } from 'com/errors'

const getDatesWithTask = (selectedDate) => {

    return fetch(`${import.meta.env.VITE_API_URL}/getdateswithtasks/${selectedDate.toISOString()}`, {

        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(() => { throw new SystemError('conection error') })
        .then(response => {
            if (response.status === 200 || response.status === 204) {
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

export default getDatesWithTask