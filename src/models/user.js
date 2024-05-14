class User {
  constructor (username, password) {
    this.username = username
    this.password = password
  }

  static findOne (username) {
    // Este es un ejemplo demostrativo sin implementar una Base de datos
    if (username === 'usuario') {
      return new User('usuario', 'password123')
    }
    return null
  }
}

export default User
