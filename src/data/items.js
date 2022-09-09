import Item from '../models/Item';

// items data
const items = [
  new Item(
    1,
    'Hoodie 1',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    29.99,
    'Grey',
    'M',
    'hoodie',
    8
  ),
  new Item(
    2,
    'Shirt 1',
    'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    22.99,
    'White',
    'S',
    'shirt',
    16
  ),
  new Item(
    3,
    'Pants 1',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
    12.99,
    'Black',
    'L',
    'pants',
    6
  ),
  new Item(
    4,
    'Hoodie 2',
    'https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80',
    18.99,
    'Black',
    'XL',
    'hoodie',
    9
  ),
  new Item(
    5,
    'Shirt 2',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    44.49,
    'Blue',
    'XXL',
    'shirt',
    11
  ),
  new Item(
    6,
    'Pants 2',
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    12.99,
    'Blue',
    'S',
    'pants',
    23
  ),
  new Item(
    7,
    'Joggers 1',
    'https://images.unsplash.com/photo-1580906853203-f493cea9ff28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    12.99,
    'Black',
    'M',
    'joggers',
    2
  ),
  new Item(
    8,
    'Boxers 1',
    'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    49.99,
    'Yellow',
    'L',
    'boxers',
    5
  ),
  new Item(
    9,
    'Boxers 2',
    'https://images.unsplash.com/photo-1615292215322-84c7b9ec441b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    49.99,
    'Red',
    'XXL',
    'boxers',
    77
  ),
  new Item(
    10,
    'Pants 3',
    'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    49.99,
    'Blue',
    'XL',
    'pants',
    22
  ),
  new Item(
    11,
    'Shirt 3',
    'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    49.99,
    'Blue',
    'M',
    'shirt',
    9
  ),
  new Item(
    12,
    'Hoodie 3',
    'https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    49.99,
    'Black',
    'M',
    'hoodie',
    5
  ),
  new Item(
    13,
    'Hoodie 4',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
    23.99,
    'White',
    'L',
    'hoodie',
    3
  ),
  new Item(
    14,
    'Shirt 5',
    'https://images.unsplash.com/photo-1563389234808-52344934935c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    23.99,
    'Blue',
    'S',
    'shirt',
    27
  ),
  new Item(
    15,
    'Joggers 2',
    'https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    23.99,
    'Black',
    'XL',
    'joggers',
    18
  ),
  new Item(
    16,
    'Pants 4',
    'https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    52.99,
    'Black',
    'XL',
    'pants',
    12
  ),
  new Item(
    17,
    'Boxers 3',
    'https://images.unsplash.com/photo-1585045059314-ac5b3e2d263a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    52.99,
    'Blue',
    'XXL',
    'boxers',
    2
  ),
  new Item(
    18,
    'Boxers 4',
    'https://images.unsplash.com/photo-1575055998868-efbb5c2350f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80',
    52.99,
    'Blue',
    'S',
    'boxers',
    5
  ),
  new Item(
    19,
    'Shirt 6',
    'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    19.99,
    'Maroon',
    'L',
    'shirt',
    3
  ),
  new Item(
    20,
    'Hoodie 5',
    'https://images.unsplash.com/photo-1565978771542-0db9ab9ad3de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    19.99,
    'Dark Green',
    'M',
    'hoodie',
    25
  ),
  new Item(
    21,
    'Pants 5',
    'https://images.unsplash.com/photo-1619729940103-790e3d1692bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    19.99,
    'Blue',
    'L',
    'pants',
    44
  ),
];

export default items;
