/**
 * This is a mock API client that simulates fetching product data from a bakery from the server
 */
interface ProductData {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const api: ProductData[] = [
  {
    id: "sourdough-bread",
    name: "Sourdough Bread",
    price: 4.49,
    description:
      "Indulge in our Authentic Sourdough Bread, crafted with care using traditional methods. With a golden crust and airy crumb, its tangy flavor profile delights. Enjoy it toasted with butter or paired with cheeses. Elevate any meal with this artisanal delight.",
    imageUrl:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&w=800",
  },
  {
    id: "baguette",
    name: "Baguette",
    price: 2.99,
    description:
      "Savor the timeless elegance of our Classic Baguette, handcrafted with care in the French tradition. Its crisp golden crust and soft, airy interior offer a perfect balance of texture. Delight in its subtle flavors, ideal for pairing with cheeses or as a standalone treat. Experience the essence of French baking with every bite of our artisanal baguette.",
    imageUrl:
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&w=800",
  },
  {
    id: "glazed-donut",
    name: "Glazed Donut",
    price: 1.69,
    description:
      "Indulge in our Irresistible Glazed Donuts, a mouthwatering delight that satisfies your sweet cravings. Made with love and attention to detail, each donut boasts a fluffy interior and a perfectly glazed exterior that glistens with sweetness. Treat yourself to the heavenly combination of soft texture and sugary goodness, guaranteed to brighten your day with every bite. Whether enjoyed as a morning treat or an afternoon pick-me-up, our Glazed Donut promises to be a delightful addition to your day.",
    imageUrl:
      "https://images.unsplash.com/photo-1573050329989-9c2509328687?auto=format&w=800",
  },
  {
    id: "croissant",
    name: "Croissant",
    price: 1.99,
    description:
      "Enjoy the simple pleasures of our Classic Plain Croissant, a timeless favorite that delights with its pure and buttery flavor. Made with the finest ingredients and expertly crafted, each croissant boasts a golden exterior and a soft, flaky interior that melts in your mouth with every bite. Whether paired with a cup of coffee for breakfast or enjoyed as a light snack any time of the day, our Plain Croissant promises a taste of traditional French baking at its finest. Treat yourself to the simple yet irresistible pleasure of our Classic Croissant today.",
    imageUrl:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&w=800",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    price: 2.99,
    description:
      "Indulge in the irresistible comfort of our freshly baked cinnamon rolls. Crafted with care, each roll features a perfect swirl of cinnamon-sugar goodness, delicately encased in our soft, pillowy dough. As you bite into the warm, fragrant layers, the rich aroma of cinnamon fills the air, enticing your senses. Finished with a generous drizzle of creamy icing, our cinnamon rolls are a delightful treat, perfect for pairing with your morning coffee or enjoying as a sweet afternoon indulgence. Treat yourself to the ultimate in baked goodness with our lovingly crafted cinnamon rolls, guaranteed to satisfy your cravings.",
    imageUrl:
      "https://images.unsplash.com/photo-1593872570782-6c6e7069e67e?auto=format&w=800",
  },
  {
    id: "lemon-tart",
    name: "Lemon Tart",
    price: 23.99,
    description:
      "Experience a burst of citrusy delight with our exquisite lemon tart. Nestled within a buttery, flaky crust, each tart is filled with a smooth and tangy lemon curd that's perfectly balanced in sweetness. The vibrant yellow hue of the filling hints at the refreshing flavor awaiting your taste buds. With every bite, you'll encounter a harmonious blend of zesty lemon and delicate pastry, leaving a lingering sensation of pure bliss. Topped with a dusting of powdered sugar or a dollop of whipped cream, our lemon tart is a refreshing dessert sensation, sure to brighten any occasion. Treat yourself to a slice of sunshine with our delectable lemon tart, crafted with love and care in our bakery.",
    imageUrl:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&w=800",
  },
];

const Api = {
  getAllProducts: () =>
    new Promise<ProductData[]>((resolve) => {
      setTimeout(() => resolve(api), 500);
    }),
  getProductById: (id: string) =>
    new Promise<ProductData>((resolve, reject) => {
      const product = api.find((p) => p.id === id);
      if (product) {
        resolve(product)
      } else {
        reject("Product not found")
      }
    }),
};

export default Api;
