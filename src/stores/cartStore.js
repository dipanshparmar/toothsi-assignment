import create from 'zustand'

const useCartStore = create((set) => {
  return {
    items: [],

    // function to add the item to the cart
    addItemToCart: (item) => {
      set((state) => {
        return {
          items: [...state.items, item]
        }
      })
    },

    // function to remove an item from the cart
    removeFromCart: (id) => {
      set((state) => {
        return {
          items: state.items.filter(item => item.id !== id)
        }
      })
    }
  }
})

export default useCartStore