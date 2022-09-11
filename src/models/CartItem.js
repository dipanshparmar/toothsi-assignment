class CartItem {
  #item
  #quantity

  constructor(item, quantity) {
    this.#item = item
    this.#quantity = quantity
  }

  // getters
  get item() {
    return this.#item
  }

  get quantity() {
    return this.#quantity
  }
}

export default CartItem