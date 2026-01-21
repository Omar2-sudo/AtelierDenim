

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const BASKET_KEY = 'userBasket';

export const basketStorage = {
  // Get the current basket
  getBasket(): BasketItem[] {
    const basket = localStorage.getItem(BASKET_KEY);
    return basket ? JSON.parse(basket) : [];
  },

  // Add item to basket
  addItem(item: BasketItem): BasketItem[] {
    const basket = this.getBasket();
    const existingIndex = basket.findIndex((i: BasketItem) => i.id === item.id);
    
    if (existingIndex > -1) {
      // Update quantity if item exists
      basket[existingIndex].quantity = (basket[existingIndex].quantity || 1) + (item.quantity || 1);
    } else {
      // Add new item
      basket.push({ ...item, quantity: item.quantity || 1 });
    }
    
    localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
    return basket;
  },

  // Update item quantity
  updateQuantity(itemId: number, quantity: number): BasketItem[] {
    const basket = this.getBasket();
    const itemIndex = basket.findIndex((i: BasketItem) => i.id === itemId);
    
    if (itemIndex > -1) {
      if (quantity <= 0) {
        basket.splice(itemIndex, 1);
      } else {
        basket[itemIndex].quantity = quantity;
      }
      localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
    }
    return basket;
  },

  // Remove item from basket
  removeItem(itemId: number): BasketItem[] {
    const basket = this.getBasket().filter((i: BasketItem) => i.id !== itemId);
    localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
    return basket;
  },

  // Clear entire basket
  clearBasket(): BasketItem[] {
    localStorage.removeItem(BASKET_KEY);
    return [];
  },

  // Get total price
  getTotal(): number {
    return this.getBasket().reduce((sum: number, item: BasketItem) => 
      sum + (item.price * item.quantity), 0
    );
  },

  // Get item count
  getItemCount(): number {
    return this.getBasket().reduce((sum: number, item: BasketItem) => 
      sum + item.quantity, 0
    );
  }
};