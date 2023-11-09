/* // Подключаем необходимый метод для мока localStorage
import 'jest-localstorage-mock';
import { getCartItemsFromLS } from "./getCartItemsFromLS";

// Запускаем тесты
test('get data', () => {
  localStorage.setItem('cart', JSON.stringify([{}, {}]));
  const cartPizza

  expect(getCartItemsFromLS()).toEqual({
    cartArray: [{}, {}],
    pizzaCount: 2,
    totalPrice: 1000,
  });

  localStorage.clear();
});

test('get data impty', () => {
    localStorage.setItem('cart', JSON.stringify([]));
  
    expect(getCartItemsFromLS()).toEqual({
      cartArray: [],
      pizzaCount: 0,
      totalPrice: 0,
    });
  
    localStorage.clear();
});


 */
