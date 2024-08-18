import { useState } from 'react'
import Field from "../../components/core/Field"
import Button from '../../components/core/Button'
import logic from '../../logic/index'

function RegisterUserForm({ onSuccess }) {
    const [registrationMessage, setRegistrationMessage] = useState('')

    const handleRegisterUserSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const avatar = form.avatar.value

        try {
            logic.registerUser(name, username, email, password, avatar)
                .then(() => {
                    setRegistrationMessage('User registered successfully')
                    setTimeout(() => {
                        setRegistrationMessage('')
                        onSuccess()
                    }, 3000)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <>
        <div className='fixed bottom-0 mb-20 left-1/2 transform -translate-x-1/2 bg-color-footer p-4 rounded-lg shadow-lg'>
            <form className='mb-4' onSubmit={handleRegisterUserSubmit}>
                <Field id="name" type="text" placeholder="name" />
                <Field id="username" type="text" placeholder="username" />
                <Field id="email" type="email" placeholder="name@example.com" />
                <Field id="password" type="password" placeholder="password" />

                <label htmlFor="avatar">Select an avatar:</label>
                <select id="avatar" name="avatar" className="form-select">
                    <option value="avatars/kiwi.jpg">kiwi</option>
                    <option value="avatars/cerezas.jpg">cerezas</option>
                    <option value="avatars/melon.jpg">melon</option>
                    <option value="avatars/pitahaya.jpg">pitahaya</option>
                    <option value="avatars/kumaquat.jpg">kumaquat</option>
                    <option value="avatars/aguacate.jpg">aguacate</option>
                </select>
                <Button type="submit">Create User</Button>
            </form>
            {registrationMessage.length > 0 && <p className="text-black-500 text-2xl">{registrationMessage}</p>}
        </div>

    </>


}

export default RegisterUserForm