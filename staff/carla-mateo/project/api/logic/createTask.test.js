import 'dotenv/config'
import mongoose from 'mongoose'

import createTask from './createTask.js'

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try {
            createTask('66c2dd6a86ca8793548cb67a', 'Sensi', 'hugo', 'title', 'hay que cambiar la fecha y la hora de X tarea', null)
                .then(() => console.log('task created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))