import create from 'zustand';
import items from '../data/items';

const useItemsStore = create((set) => {
  return {
    items: items,
    filtered: items,
    
    applyFilters: (typeFilter, sizeFilter) => {
      set((state) => {
        if (typeFilter === 'all' && sizeFilter === 'size') {
          return {
            filtered: state.items
          }
        } else if (typeFilter === 'all' && sizeFilter !== 'size') {
          return {
            filtered: state.items.filter(item => item.size === sizeFilter)
          }
        } else if (typeFilter !== 'all' && sizeFilter === 'size') {
          return {
            filtered: state.items.filter(item => item.type === typeFilter)
          }
        } else {
          return {
            filtered: state.items.filter(item => item.type === typeFilter && item.size === sizeFilter)
          }
        }
      })
    },

    applySearch: (searchValue) => {
      set((state) => {
        return {
          filtered: state.filtered.filter(item => item.name.includes(searchValue))
        }
      })
    }
  };
});

export default useItemsStore;
