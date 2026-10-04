import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'burnt-cheesecake',
    name: 'Burnt Cheesecake',
    category: 'Cakes',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Classic creamy burnt cheesecake with premium toppings.',
    description: 'Our signature Burnt Cheesecake with a perfectly caramelized top. Features delicious toppings including Filling Chocolate, Biscuit, Fruits, and Choco Ball.',
    price: 65000,
    variants: [
      {
        id: 'p1-v1',
        name: 'Size 12cm',
        size: '12 cm',
        description: 'No text included',
        price: 65000,
      },
      {
        id: 'p1-v2',
        name: 'Size 15cm',
        size: '15 cm',
        description: 'Add 2 word text',
        price: 155000,
      },
      {
        id: 'p1-v3',
        name: 'Size 20cm',
        size: '20 cm',
        description: 'Add 3 word text',
        price: 225000,
      }
    ]
  },
  {
    id: 'p2',
    slug: 'fudgy-brownies-custome',
    name: 'Fudgy Brownies Custome',
    category: 'Brownies',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Custom fudgy brownies with custom text and toppings.',
    description: 'Custom fudgy brownies. Toppings include Filling Chocolate, Biscuit, Fruits, Choco Ball, and Sprinkle of Nuts.',
    price: 40000,
    variants: [
      {
        id: 'p2-v1',
        name: 'Size 10x10x4 cm',
        size: '10 x 10 x 4 cm',
        description: 'Add 2 word text',
        price: 40000,
      },
      {
        id: 'p2-v2',
        name: 'Size 20x10x4 cm',
        size: '20 x 10 x 4 cm',
        description: 'Add 3 word text',
        price: 85000,
      },
      {
        id: 'p2-v3',
        name: 'Size 20x20x4 cm',
        size: '20 x 20 x 4 cm',
        description: 'Add 3 word text',
        price: 150000,
      }
    ]
  },
  {
    id: 'p3',
    slug: 'fudgy-brownies',
    name: 'Fudgy Brownies',
    category: 'Brownies',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Classic fudgy brownies with rich chocolate flavor.',
    description: 'Brownies lembut dan fudgy dengan rasa cokelat pekat atau tekstur rich. Cocok untuk cemilan, hantaran, maupun acara spesial.',
    price: 60000,
    variants: [
      {
        id: 'p3-v1',
        name: 'Topping ChocoChip & Almond',
        size: '20 x 10 x 4 cm',
        description: 'Diberi topping chocochip manis dan potongan almond renyah.',
        price: 60000,
      },
      {
        id: 'p3-v2',
        name: 'Topping Keju & Almond',
        size: '20 x 10 x 4 cm',
        description: 'Dipadukan dengan gurihnya parutan keju dan renyahnya potongan almond.',
        price: 60000,
      }
    ]
  },
  {
    id: 'p4',
    slug: 'brownies-kering-mini',
    name: 'Brownies Kering Mini',
    category: 'Brownies',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Mini crunchy brownies.',
    description: 'Hadir dalam ukuran mungil yang praktis, cocok untuk sharing bersama orang terdekat, isian toples, atau teman ngemil. (Isi: 42 Pcs)',
    price: 45000,
    variants: [
      {
        id: 'p4-v1',
        name: '1 Box (42 Pcs)',
        price: 45000,
      }
    ]
  },
  {
    id: 'p5',
    slug: 'bolu-ketan-hitam',
    name: 'Bolu Ketan Hitam',
    category: 'Cakes',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Soft black sticky rice cake with cheese filling.',
    description: 'Bolu ketan hitam lembut dengan aroma khas yang menggugah selera, dipadukan dengan keju melimpah yang lumer dan creamy.',
    price: 25000,
    variants: [
      {
        id: 'p5-v1',
        name: 'Mini (Isi 3 Pcs)',
        description: 'Ukuran mini praktis dengan topping keju gurih.',
        price: 25000,
      },
      {
        id: 'p5-v2',
        name: '16cm (Tanpa Topping, Isi Keju Lumer)',
        size: '16 cm',
        price: 50000,
      },
      {
        id: 'p5-v3',
        name: '16cm (Full Keju, Isi Keju Lumer)',
        size: '16 cm',
        price: 55000,
      }
    ]
  },
  {
    id: 'p6',
    slug: 'pudding-choco',
    name: 'Pudding Choco',
    category: 'Desserts',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Premium chocolate fruit pudding and cups.',
    description: 'Puding coklat premium dengan perpaduan rasa manis coklat dan segarnya buah. Cocok untuk hampers & acara spesial.',
    price: 10000,
    variants: [
      {
        id: 'p6-v1',
        name: 'Mix Topping Cup',
        size: '150 ml',
        description: 'Dessert lembut dengan rasa coklat nikmat. Dikemas dalam cup praktis.',
        price: 10000,
      },
      {
        id: 'p6-v2',
        name: 'Fruit 16cm',
        size: '16 cm',
        description: 'Include: Ucapan, Lilin, Topper. Dekorasi buah segar.',
        price: 125000,
      },
      {
        id: 'p6-v3',
        name: 'Fruit 24cm',
        size: '24 cm',
        description: 'Include: Ucapan, Lilin, Topper. Dekorasi buah segar.',
        price: 170000,
      }
    ]
  },
  {
    id: 'p7',
    slug: 'banana-struddel',
    name: 'Banana Struddel',
    category: 'Pastry',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Crispy pastry with sweet banana and creamy filling.',
    description: 'Pastry berlapis yang renyah di luar dan lembut di dalam, berisi potongan pisang manis yang dipadukan dengan isian creamy dan harum kayu manis. Topping: Keju, Chocochip, Almond.',
    price: 55000,
    variants: [
      {
        id: 'p7-v1',
        name: '1 Box',
        price: 55000,
      }
    ]
  },
  {
    id: 'p8',
    slug: 'rogut',
    name: 'Rogut',
    category: 'Savory',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Creamy savory snack with chicken and vegetables.',
    description: 'Perpaduan ayam pilihan yang lembut, sayuran segar (Kentang, Wortel), dan keju bersatu menjadi creamy yang gurih dan lezat.',
    price: 5000,
    variants: [
      {
        id: 'p8-v1',
        name: '1 Pcs',
        price: 5000,
      }
    ]
  },
  {
    id: 'p9',
    slug: 'sosis-solo',
    name: 'Sosis Solo',
    category: 'Savory',
    thumbnail: '/placeholder.jpg',
    images: ['/placeholder.jpg'],
    shortDescription: 'Homemade Sosis Solo with chicken filling.',
    description: 'Sosis Solo Homemade. Kulit lembut dengan isian ayam suwir gurih berbumbu khas yang melimpah. Nikmat disantap hangat.',
    price: 5000,
    variants: [
      {
        id: 'p9-v1',
        name: '1 Pcs',
        price: 5000,
      }
    ]
  }
];
