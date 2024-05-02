var logic = {}

var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var USERNAME_REGEX = /^[a-zA-Z0-9-_]+$/

var PASSWORD_REGEX = /^[a-zA-Z0-9-_$%&=\[\]\{\}\<\>\(\)]{4,}$/

var NAME_REGEX = /^[a-zA-Z=\[\]\{\}\<\>\(\)]{4,}$/

logic.registerUser = function (name, surname, email, username, password, passwordRepeat) {
    if (!NAME_REGEX.test(name))
        throw new ContentError('❌ Name is not valid')

    if (!NAME_REGEX.test(surname))
        throw new ContentError('❌ Surname is not valid')

    if (!EMAIL_REGEX.test(email))
        throw new ContentError('❌ Email is not valid')

    if (!USERNAME_REGEX.test(username))
        throw new ContentError('❌ Username is not valid')

    if (!PASSWORD_REGEX.test(password))
        throw new ContentError('❌ Password is not valid')

    if (!PASSWORD_REGEX.test(passwordRepeat))
        throw new ContentError('❌ Password repeat is not valid')

    if (password !== passwordRepeat)
        throw new MatchError('❌ Password don\'t match')


    var user = data.findUser(function (user) {
        return user.email === email || user.username === username
    })

    if (user)
        throw new DuplicityhError('❌ User already exist')

    user = {

        name: name,
        surname: surname,
        email: email,
        username: username,
        password: password
    }

    data.insertUser(user)

}
logic.loginUser = function (username, password) {
    if (!USERNAME_REGEX.test(username))
        throw new ContentError('❌ Username is not valid')

    if (!PASSWORD_REGEX.test(password))
        throw new ContentError('❌ Password is not valid')

    var user = data.findUser(function (user) {
        return user.username === username
    })

    if (!user)
        throw new MatchError('❌ User not found')

    if (user.password !== password)
        throw new MatchError('❌ Wrong password')

    sessionStorage.username = username
}

logic.isUserLoggedIn = function () {
    return !!sessionStorage.username
}

logic.logoutUser = function () {
    delete sessionStorage.username
}
logic.getUserName = function () {
    var user = data.findUser(function (user) {
        return user.username === sessionStorage.username
    })

    return user.name
}

