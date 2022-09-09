// the item class
class Item {
  // private properties
  #id
  #name
  #image
  #price
  #color
  #size
  #type
  #quantity

  constructor(id, name, image, price, color, size, type, quantity) {
    this.#id = id
    this.#name = name
    this.#image = image
    this.#price = price
    this.#color = color
    this.#size = size
    this.#type = type
    this.#quantity = quantity
  }

  // getters
  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get image() {
    return this.#image
  }

  get price() {
    return this.#price
  }

  get color() {
    return this.#color
  }

  get size() {
    return this.#size
  }

  get type() {
    return this.#type
  }

  get quantity() {
    return this.#quantity
  }
}

export default Item