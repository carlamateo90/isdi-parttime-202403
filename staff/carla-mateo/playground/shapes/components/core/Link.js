function Link() {
    Component.call(this, 'a')

    this.setUrl('https://www.google.com')
}

Link.prototype = Object.create(Component.prototype)
Link.prototype.constructor = Link

Link.prototype.setUrl = function (url) {
    this.container.href = url
}

Link.prototype.setTarget = function (target) {
    this.container.target = target
}