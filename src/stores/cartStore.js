import create from 'zustand';
import CartItem from '../models/CartItem';

let store = (set) => {
  return {
    cartItems: [],
    total: 0,

    // function to clear the cart
    clearCart: () => {
      set((state) => ({
        total: 0,
        cartItems: [],
      }));
    },

    // function to add the item to the cart
    addItemToCart: (cartItem) => {
      set((state) => {
        // if cartItem already in cartItems then return the previous state
        const alreadyIn = state.cartItems.filter((item) => {
          return item.item.id === cartItem.item.id;
        });

        if (alreadyIn.length > 0) {
          console.log('not added');
          return state;
        }

        console.log('added');
        return {
          cartItems: [...state.cartItems, cartItem],
          total: state.total + cartItem.item.price * cartItem.quantity,
        };
      });
    },

    // function to remove an item from the cart
    removeFromCart: (passedCartItem) => {
      set((state) => {
        let isExists = false; // variable to check whether the item exists or not

        for (let i = 0; i < state.cartItems.length; i++) {
          // set the flag accordingly
          if (state.cartItems[i].item.id === passedCartItem.item.id) {
            isExists = true;
          }
        }

        return {
          total: isExists
            ? state.total - passedCartItem.item.price * passedCartItem.quantity
            : state.total,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.item.id !== passedCartItem.item.id
          ),
        };
      });
    },

    // function to update quantity
    updateQuantity: (passedCartItem, newQty) => {
      set((state) => {
        // getting the cart item that will be replaced
        const oldCartItem = state.cartItems.filter(
          (cartItem) => cartItem.item.id === passedCartItem.item.id
        )[0];

        // new cart item
        const newCartItem = new CartItem(passedCartItem.item, newQty);

        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.item.id === passedCartItem.item.id ? newCartItem : cartItem
          ),
          total:
            state.total -
            oldCartItem.item.price * oldCartItem.quantity +
            newCartItem.item.price * newCartItem.quantity,
        };
      });
    },
  };
};

const useCartStore = create(store);

export default useCartStore;
