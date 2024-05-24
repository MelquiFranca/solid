class Course {
  #name
  #category
  #description
  getName() {
    return this.#name
  }
  getCategory() {
    return this.#category
  }
  getDescription() {
    return this.#description
  }
  connection() {
    const connection = {
      insert: (data) => console.log(`Created item: ${data}`)
    } //objeto de conexão com banco de dados
    return connection
  }
  createCategory(data) {
    this.connection().insert(data)
  }
}