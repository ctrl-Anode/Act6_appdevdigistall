const products = [
  { id: 1, name: 'Smartphone X', price: 699.99, image: 'https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FApple_i_Phone_16_specification_feed5e61f2.jpg&w=640&q=75' },
  { id: 2, name: 'Laptop Pro', price: 1299.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZ28u2IRahliOiviiSK4xcLE2-W-obxg-_g&s' },
  // Add more products here...
];

res.render('products', { products, user_id });