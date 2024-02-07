const { faker } = require("@faker-js/faker");
class user {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.primerNombre = faker.person.firstName();
    this.apellido = faker.person.lastName();
    this.numeroTelefono = faker.phone.number();
    this.email = faker.internet.email({
      firstName: this.primerNombre,
      lastName: this.apellido,
    });
    this.contrasena = faker.internet.password({ length: 8, memorable: true });
  }
}
module.exports = user;
