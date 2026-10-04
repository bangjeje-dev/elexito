import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'burnt-cheesecake',
    name: 'Burnt Cheesecake',
    category: 'Cakes',
    thumbnail: '/assets/products/burnt-cheesecake/Artboard 1.webp',
    images: ['/assets/products/burnt-cheesecake/Artboard 1.webp', '/assets/products/burnt-cheesecake/Artboard 2.webp', '/assets/products/burnt-cheesecake/Artboard 3.webp'],
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
        images: ['/assets/products/burnt-cheesecake/Artboard 1.webp']
      },
      {
        id: 'p1-v2',
        name: 'Size 15cm',
        size: '15 cm',
        description: 'Add 2 word text',
        price: 155000,
        images: ['/assets/products/burnt-cheesecake/Artboard 2.webp']
      },
      {
        id: 'p1-v3',
        name: 'Size 20cm',
        size: '20 cm',
        description: 'Add 3 word text',
        price: 225000,
        images: ['/assets/products/burnt-cheesecake/Artboard 3.webp']
      }
    ]
  },
  {
    id: 'p2',
    slug: 'fudgy-brownies-custome',
    name: 'Fudgy Brownies Custome',
    category: 'Brownies',
    thumbnail: '/assets/products/fudgy-brownies-custome/Artboard 1.webp',
    images: ['/assets/products/fudgy-brownies-custome/Artboard 1.webp', '/assets/products/fudgy-brownies-custome/Artboard 2.webp', '/assets/products/fudgy-brownies-custome/Artboard 3.webp'],
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
        images: ['/assets/products/fudgy-brownies-custome/Artboard 1.webp']
      },
      {
        id: 'p2-v2',
        name: 'Size 20x10x4 cm',
        size: '20 x 10 x 4 cm',
        description: 'Add 3 word text',
        price: 85000,
        images: ['/assets/products/fudgy-brownies-custome/Artboard 2.webp']
      },
      {
        id: 'p2-v3',
        name: 'Size 20x20x4 cm',
        size: '20 x 20 x 4 cm',
        description: 'Add 3 word text',
        price: 150000,
        images: ['/assets/products/fudgy-brownies-custome/Artboard 3.webp']
      }
    ]
  },
  {
    id: 'p3',
    slug: 'fudgy-brownies',
    name: 'Fudgy Brownies',
    category: 'Brownies',
    thumbnail: '/assets/products/fudgy-brownies/Artboard 2.webp',
    images: ['/assets/products/fudgy-brownies/Artboard 2.webp', '/assets/products/fudgy-brownies/Artboard 3.webp'],
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
        images: ['/assets/products/fudgy-brownies/Artboard 2.webp']
      },
      {
        id: 'p3-v2',
        name: 'Topping Keju & Almond',
        size: '20 x 10 x 4 cm',
        description: 'Dipadukan dengan gurihnya parutan keju dan renyahnya potongan almond.',
        price: 60000,
        images: ['/assets/products/fudgy-brownies/Artboard 3.webp']
      }
    ]
  },
  {
    id: 'p4',
    slug: 'brownies-kering-mini',
    name: 'Brownies Kering Mini',
    category: 'Brownies',
    thumbnail: '/assets/products/brownies-kering-mini/Artboard 1.webp',
    images: ['/assets/products/brownies-kering-mini/Artboard 1.webp', '/assets/products/brownies-kering-mini/Artboard 2.webp', '/assets/products/brownies-kering-mini/Artboard 3.webp'],
    shortDescription: 'Mini crunchy brownies.',
    description: 'Hadir dalam ukuran mungil yang praktis, cocok untuk sharing bersama orang terdekat, isian toples, atau teman ngemil. (Isi: 42 Pcs)',
    price: 45000,
    variants: [
      {
        id: 'p4-v1',
        name: '1 Box (42 Pcs)',
        price: 45000,
        images: ['/assets/products/brownies-kering-mini/Artboard 1.webp', '/assets/products/brownies-kering-mini/Artboard 2.webp', '/assets/products/brownies-kering-mini/Artboard 3.webp']
      }
    ]
  },
  {
    id: 'p5',
    slug: 'bolu-ketan-hitam',
    name: 'Bolu Ketan Hitam',
    category: 'Cakes',
    thumbnail: '/assets/products/bolu-ketan-hitam/Artboard 1.webp',
    images: ['/assets/products/bolu-ketan-hitam/Artboard 1.webp', '/assets/products/bolu-ketan-hitam/Artboard 2.webp', '/assets/products/bolu-ketan-hitam/Artboard 3.webp'],
    shortDescription: 'Soft black sticky rice cake with cheese filling.',
    description: 'Bolu ketan hitam lembut dengan aroma khas yang menggugah selera, dipadukan dengan keju melimpah yang lumer dan creamy.',
    price: 25000,
    variants: [
      {
        id: 'p5-v1',
        name: 'Mini (Isi 3 Pcs)',
        description: 'Ukuran mini praktis dengan topping keju gurih.',
        price: 25000,
        images: ['/assets/products/bolu-ketan-hitam/Artboard 1.webp']
      },
      {
        id: 'p5-v2',
        name: '16cm (Tanpa Topping, Isi Keju Lumer)',
        size: '16 cm',
        price: 50000,
        images: ['/assets/products/bolu-ketan-hitam/Artboard 2.webp']
      },
      {
        id: 'p5-v3',
        name: '16cm (Full Keju, Isi Keju Lumer)',
        size: '16 cm',
        price: 55000,
        images: ['/assets/products/bolu-ketan-hitam/Artboard 3.webp']
      }
    ]
  },
  {
    id: 'p6',
    slug: 'pudding-choco',
    name: 'Pudding Choco',
    category: 'Desserts',
    thumbnail: '/assets/products/pudding-choco/Artboard 1.webp',
    images: ['/assets/products/pudding-choco/Artboard 1.webp', '/assets/products/pudding-choco/Artboard 2.webp', '/assets/products/pudding-choco/Artboard 3.webp'],
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
        images: ['/assets/products/pudding-choco/Artboard 3.webp']
      },
      {
        id: 'p6-v2',
        name: 'Fruit 16cm',
        size: '16 cm',
        description: 'Include: Ucapan, Lilin, Topper. Dekorasi buah segar.',
        price: 125000,
        images: ['/assets/products/pudding-choco/Artboard 2.webp']
      },
      {
        id: 'p6-v3',
        name: 'Fruit 24cm',
        size: '24 cm',
        description: 'Include: Ucapan, Lilin, Topper. Dekorasi buah segar.',
        price: 170000,
        images: ['/assets/products/pudding-choco/Artboard 1.webp']
      }
    ]
  },
  {
    id: 'p7',
    slug: 'banana-struddel',
    name: 'Banana Struddel',
    category: 'Pastry',
    thumbnail: '/assets/products/banana-strudel/Asset 10.webp',
    images: ['/assets/products/banana-strudel/Asset 10.webp'],
    shortDescription: 'Crispy pastry with sweet banana and creamy filling.',
    description: 'Pastry berlapis yang renyah di luar dan lembut di dalam, berisi potongan pisang manis yang dipadukan dengan isian creamy dan harum kayu manis. Topping: Keju, Chocochip, Almond.',
    price: 55000,
    variants: [
      {
        id: 'p7-v1',
        name: '1 Box',
        price: 55000,
        images: ['/assets/products/banana-strudel/Asset 10.webp']
      }
    ]
  },
  {
    id: 'p8',
    slug: 'rogut',
    name: 'Rogut',
    category: 'Savory',
    thumbnail: '/assets/products/rogut/Asset 11.webp',
    images: ['/assets/products/rogut/Asset 11.webp'],
    shortDescription: 'Creamy savory snack with chicken and vegetables.',
    description: 'Perpaduan ayam pilihan yang lembut, sayuran segar (Kentang, Wortel), dan keju bersatu menjadi creamy yang gurih dan lezat.',
    price: 5000,
    variants: [
      {
        id: 'p8-v1',
        name: '1 Pcs',
        price: 5000,
        images: ['/assets/products/rogut/Asset 11.webp']
      }
    ]
  },
  {
    id: 'p9',
    slug: 'sosis-solo',
    name: 'Sosis Solo',
    category: 'Savory',
    thumbnail: '/assets/products/sosis-solo/Asset 12.webp',
    images: ['/assets/products/sosis-solo/Asset 12.webp'],
    shortDescription: 'Homemade Sosis Solo with chicken filling.',
    description: 'Sosis Solo Homemade. Kulit lembut dengan isian ayam suwir gurih berbumbu khas yang melimpah. Nikmat disantap hangat.',
    price: 5000,
    variants: [
      {
        id: 'p9-v1',
        name: '1 Pcs',
        price: 5000,
        images: ['/assets/products/sosis-solo/Asset 12.webp']
      }
    ]
  }
];
