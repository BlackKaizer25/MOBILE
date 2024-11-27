const placesData = {
  'Umarika Cafe': {
    name: 'Umarika Cafe',
    location: 'Purok 15, Damilag, Manolo Fortich, Bukidnon',
    rating: 5,
    description:
      'A cozy cafe with a beautiful ambiance, perfect for gatherings and coffee enthusiasts.',
    activities: ['Dining', 'Coffee', 'Social Events'],
    images: [
      require('../../assets/umarika.png'),
      require('../../assets/bamboo.png'),
      require('../../assets/tree.png'),
      require('../../assets/eunice.png'),
      require('../../assets/brigada.png'),
    ],
    contactNumber: '123456789123',
    email: 'daniel@gmail.com',
    address: 'Purok 10',
    guidelines:
      'Damilag Hills, gracefully nestled within the enchanting and vibrant municipality of Manolo Fortich in the province of Bukidnon, is a truly captivating and serene destination that has gained recognition for its vast, sweeping landscapes of lush, rolling green hills, its unspoiled and pristine natural environment, and its awe-inspiring panoramic vistas that seem to stretch endlessly into the horizon. This idyllic haven, surrounded by the breathtaking beauty of nature, offers visitors a peaceful retreat away from the chaos and noise of urban life, providing an opportunity to immerse themselves in the tranquility and serenity of Bukidnons rich biodiversity, while also serving as a gateway to explore the cultural and natural wonders of this picturesque region in Northern Mindanao.',
    prices: [
      { title: 'Room (Good for 1)', price: 'PHP 1,000' },
      { title: 'Room (Good for 5)', price: 'PHP 3,000' },
      { title: 'Room (Good for 7)', price: 'PHP 4,000' },
      { title: 'Room Set B (Good for 2)', price: 'PHP 5,000' },
    ],
  },
  'Eunice Villa': {
    name: 'Eunice Villa',
    location: 'Purok 16, Damilag, Manolo Fortich, Bukidnon',
    rating: 4,
    description:
      'A relaxing villa with scenic views, ideal for family retreats and peaceful stays.',
    activities: ['Accommodation', 'Recreation', 'Events'],
    images: [
      require('../../assets/eunice.png'),
      require('../../assets/tree.png'),
      require('../../assets/bamboo.png'),
      require('../../assets/brigada.png'),
      require('../../assets/bao.png'),
    ],
    contactNumber: '123456789456',
    email: 'daniel1@gmail.com',
    address: 'Purok 11',
    guidelines:
      'Ensure peace and quiet to maintain the serene environment. No loud music after 10 PM.',
    prices: [
      { title: 'Standard Room', price: 'PHP 2,000' },
      { title: 'Deluxe Room', price: 'PHP 4,000' },
      { title: 'Family Suite', price: 'PHP 6,000' },
      { title: 'Private Villa', price: 'PHP 10,000' },
    ],
  },
  'Reys Warehouse': {
    name: 'Reys Warehouse',
    location: 'Purok 17, Damilag, Manolo Fortich, Bukidnon',
    rating: 3,
    description:
      'A spacious warehouse suitable for various storage and industrial needs.',
    activities: ['Storage', 'Logistics'],
    images: [
      require('../../assets/rey.png'),
      require('../../assets/bao.png'),
      require('../../assets/brigada.png'),
      require('../../assets/damilag.png'),
      require('../../assets/hardware.png'),
    ],
    contactNumber: '123456789789',
    email: 'daniel2@gmail.com',
    address: 'Purok 12',
    guidelines:
      'Follow safety regulations and avoid unauthorized access to restricted areas.',
    prices: [
      { title: 'Small Storage Unit', price: 'PHP 5,000/month' },
      { title: 'Medium Storage Unit', price: 'PHP 10,000/month' },
      { title: 'Large Storage Unit', price: 'PHP 15,000/month' },
    ],
  },
  'Cuarteros Hardware': {
    name: 'Cuarteros Hardware',
    location: 'Purok 18, Damilag, Manolo Fortich, Bukidnon',
    rating: 3,
    description:
      'Your go-to hardware store for all building materials and tools.',
    activities: ['Shopping', 'Consultation'],
    images: [
      require('../../assets/hardware.png'),
      require('../../assets/damilag.png'),
      require('../../assets/tree.png'),
      require('../../assets/eunice.png'),
      require('../../assets/brigada.png'),
    ],
    contactNumber: '123456789321',
    email: 'daniel3@gmail.com',
    address: 'Purok 13',
    guidelines:
      'Wear safety gear when handling equipment and always follow staff instructions.',
    prices: [
      { title: 'Hammer', price: 'PHP 500' },
      { title: 'Power Drill', price: 'PHP 3,500' },
      { title: 'Toolbox', price: 'PHP 2,000' },
      { title: 'Construction Gloves', price: 'PHP 250' },
    ],
  },
};

export default placesData;
