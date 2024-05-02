

function Shape() {
    Component.call(this, 'div')

    this.container.style.position = 'absolute'

    this.move(0, 0, 0)
}

Shape.prototype = Object.create(Component.prototype)
Shape.prototype.constructor = Shape

Shape.prototype.setHeight = function (value) {
    this.container.style.height = value + 'px'
}
Shape.prototype.setWidth = function (value) {
    this.container.style.width = value + 'px'
}
Shape.prototype.setRadius = function (value) {
    this.container.style.borderRadius = value + '%'
}
Shape.prototype.setColor = function (value) {
    this.container.style.backgroundColor = value
}
Shape.prototype.moveX = function (x) {
    this.x = x
    this.container.style.left = x + 'px'
}
Shape.prototype.moveY = function (y) {
    this.y = y
    this.container.style.top = y + 'px'
}
Shape.prototype.moveZ = function (z) {
    this.z = z
    this.container.style.transform = 'scale(' + (z + 100) / 100 + ' )'
}
Shape.prototype.move = function (x, y, z) {
    this.moveX(x)
    this.moveY(y)
    this.moveZ(z)
}
Shape.prototype.moveRelativeX = function (dx) {
    this.x += dx
    this.container.style.left = this.x + 'px'
}
Shape.prototype.moveRelativeY = function (dy) {
    this.y += dy
    this.container.style.top = this.y + 'px'
}
Shape.prototype.moveRelativeZ = function (dz) {
    this.z += dz
    this.container.style.transform = 'scale(' + (this.z + 100) / 100 + ')'
}
Shape.prototype.moveRelative = function (dx, dy, dz) {
    this.moveRelativeX(dx)
    this.moveRelativeY(dy)
    this.moveRelativeZ(dz)
}