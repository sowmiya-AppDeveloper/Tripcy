import {Alert, Dimensions, Platform, ToastAndroid} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenMatrix = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  width,
  height,
};

export const dynamicFontsize = {
  font2: screenMatrix.screenWidth * (2 / 375),
  font4: screenMatrix.screenWidth * (4 / 375),
  font6: screenMatrix.screenWidth * (6 / 375),
  font8: screenMatrix.screenWidth * (8 / 375),
  font10: screenMatrix.screenWidth * (10 / 375),
  font12: screenMatrix.screenWidth * (12 / 375),
  font14: screenMatrix.screenWidth * (14 / 375),
  font16: screenMatrix.screenWidth * (16 / 375),
  font18: screenMatrix.screenWidth * (18 / 375),
  font20: screenMatrix.screenWidth * (20 / 375),
  font22: screenMatrix.screenWidth * (22 / 375),
  font24: screenMatrix.screenWidth * (24 / 375),
  font26: screenMatrix.screenWidth * (26 / 375),
  font28: screenMatrix.screenWidth * (28 / 375),
};

export const Toast = (value, length) => {
  if (Platform.OS === 'android') {
    if (length) {
      ToastAndroid.showWithGravity(
        value,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      ToastAndroid.showWithGravity(
        value,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  } else if (Platform.OS === 'ios') {
    Alert.alert('Tripcy', value, [
      {text: 'OK', onPress: () => console.log('')},
    ]);
  }
};

export const vacationTrips = [
  {
    id: 1,
    place: 'Maldives Island',
    country: 'South Asia',
    price: 89000,
    rating: 4.5,
    distance: '2030 Km',
    about:
      'A tropical paradise known for its crystal-clear waters, white sandy beaches, and luxurious resorts.',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg',
    facility: ['Free food', 'Swimming pool', 'Snorkeling', 'Scuba diving'],
  },
  {
    id: 2,
    place: 'Bali',
    country: 'Indonesia',
    price: 75000,
    rating: 4.7,
    distance: '2980 Km',
    about:
      'A stunning island destination with iconic rice paddies, coral reefs, and vibrant nightlife.',
    image:
      'https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    facility: ['Free breakfast', 'Spa', 'Guided tours', 'Private beach access'],
  },
  {
    id: 3,
    place: 'Santorini',
    country: 'Greece',
    price: 98000,
    rating: 4.8,
    distance: '5900 Km',
    about:
      'A romantic island with breathtaking sunsets, blue-domed churches, and volcanic beaches.',
    image:
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    facility: [
      'Free Wi-Fi',
      'Infinity pool',
      'Cultural tours',
      'Hiking trails',
    ],
  },
  {
    id: 4,
    place: 'Paris',
    country: 'France',
    price: 120000,
    rating: 4.6,
    distance: '8200 Km',
    about:
      'The City of Love offers iconic landmarks, world-class museums, and a rich cultural experience.',
    image:
      'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    facility: [
      'Free breakfast',
      'City tours',
      'Museum passes',
      'Airport transfer',
    ],
  },
  {
    id: 5,
    place: 'Tokyo',
    country: 'Japan',
    price: 110000,
    rating: 4.9,
    distance: '6800 Km',
    about:
      'A bustling metropolis blending traditional culture with cutting-edge technology and cuisine.',
    image:
      'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    facility: [
      'Free meals',
      'Local guides',
      'Public transport pass',
      'Cultural workshops',
    ],
  },
  {
    id: 6,
    place: 'Dubai',
    country: 'United Arab Emirates',
    price: 88000,
    rating: 4.7,
    distance: '3500 Km',
    about:
      'A luxurious city known for its futuristic skyline, shopping malls, and desert adventures.',
    image:
      'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    facility: [
      'Free parking',
      'Desert safari',
      'Rooftop pool',
      'Gym facilities',
    ],
  },
  {
    id: 7,
    place: 'Sydney',
    country: 'Australia',
    price: 135000,
    rating: 4.8,
    distance: '12000 Km',
    about:
      'A coastal city famous for its Opera House, stunning beaches, and vibrant harbor.',
    image: 'https://via.placeholder.com/150',
    facility: ['Free Wi-Fi', 'Beach access', 'City tours', 'Fitness center'],
  },
  {
    id: 8,
    place: 'Machu Picchu',
    country: 'Peru',
    price: 99000,
    rating: 4.9,
    distance: '14500 Km',
    about:
      'A historic Incan site set high in the Andes Mountains, surrounded by lush green valleys.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Free breakfast',
      'Hiking guide',
      'Cultural experiences',
      'Eco-lodges',
    ],
  },
  {
    id: 9,
    place: 'Cape Town',
    country: 'South Africa',
    price: 87000,
    rating: 4.6,
    distance: '9600 Km',
    about:
      'A vibrant city with stunning landscapes, wineries, and a mix of cultures.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Free transport',
      'Guided tours',
      'Mountain trekking',
      'Luxury rooms',
    ],
  },
  {
    id: 10,
    place: 'New York City',
    country: 'United States',
    price: 150000,
    rating: 4.8,
    distance: '13000 Km',
    about:
      'The city that never sleeps offers iconic landmarks, diverse food, and endless entertainment.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'City tours',
      'Luxury suites',
      'Free breakfast',
      'Concert passes',
    ],
  },
  {
    id: 11,
    place: 'Venice',
    country: 'Italy',
    price: 92000,
    rating: 4.7,
    distance: '7100 Km',
    about:
      'A romantic city built on canals, famous for gondola rides, historic architecture, and art.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Free Wi-Fi',
      'Gondola ride',
      'Breakfast buffet',
      'Walking tours',
    ],
  },
  {
    id: 12,
    place: 'Phuket',
    country: 'Thailand',
    price: 68000,
    rating: 4.6,
    distance: '2100 Km',
    about:
      'A tropical destination with stunning beaches, vibrant nightlife, and water sports.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Beachside dining',
      'Free drinks',
      'Snorkeling gear',
      'Pool parties',
    ],
  },
  {
    id: 13,
    place: 'Kyoto',
    country: 'Japan',
    price: 95000,
    rating: 4.9,
    distance: '6400 Km',
    about:
      'A city rich in history and culture, known for its temples, gardens, and traditional tea houses.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Tea ceremonies',
      'Cultural workshops',
      'Guided temple tours',
      'Free meals',
    ],
  },
  {
    id: 14,
    place: 'Rio de Janeiro',
    country: 'Brazil',
    price: 102000,
    rating: 4.8,
    distance: '14200 Km',
    about:
      'A vibrant city known for its beaches, samba, and the iconic Christ the Redeemer statue.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Beach volleyball',
      'Free breakfast',
      'Nightlife tours',
      'Swimming pool',
    ],
  },
  {
    id: 15,
    place: 'Queenstown',
    country: 'New Zealand',
    price: 125000,
    rating: 4.8,
    distance: '11800 Km',
    about:
      'An adventure capital offering skiing, bungee jumping, and stunning lake views.',
    image: 'https://via.placeholder.com/150',
    facility: [
      'Adventure packages',
      'Ski gear',
      'Luxury lodges',
      'Free transport',
    ],
  },
];
export const serviceArray = [
  {
    id: 1,
    type: 'Bike',
    name: 'Harley Davidson',
    description: 'Cruiser bike with powerful engine and sleek design.',
    rating: 4.8,
    facilities: 'Powerful Engine',
    image:
      'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    id: 2,
    type: 'Bike',
    name: 'Yamaha R1',
    description: 'Sport bike with high performance and speed.',
    rating: 4.7,
    facilities: 'High Speed',
    image:
      'https://images.pexels.com/photos/29465619/pexels-photo-29465619/free-photo-of-red-yamaha-r1-motorcycle-gathering-in-lagos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    id: 3,
    type: 'Bus',
    name: 'Volvo Bus',
    description: 'Luxury bus with reclining seats and spacious interiors.',
    rating: 4.7,
    facilities: 'Reclining Seats',
    image:
      'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    type: 'Bus',
    name: 'Mercedes-Benz Bus',
    description: 'Comfortable and luxurious bus with ample legroom.',
    rating: 4.6,
    facilities: 'Leather Seats',
    image:
      'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    type: 'Hotel',
    name: 'Grand Palace Hotel',
    description: '5-star hotel with premium services and elegant rooms.',
    rating: 4.9,
    facilities: 'Leather Seats',
    image:
      'https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    type: 'Hotel',
    name: 'Oceanview Resort',
    description:
      'Beachside resort with luxurious amenities and stunning views.',
    rating: 4.8,
    facilities: 'Leather Seats',
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    type: 'Restaurant',
    name: 'Gourmet Delights',
    description: 'Fine dining with exquisite international cuisine.',
    rating: 4.6,
    facilities: 'Leather Seats',
    image:
      'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    type: 'Restaurant',
    name: 'The Royal Feast',
    description: 'Exquisite fine dining with a royal ambiance.',
    rating: 4.9,
    facilities: 'Leather Seats',
    image:
      'https://images.pexels.com/photos/29689469/pexels-photo-29689469/free-photo-of-schonbrunn-palace-in-vienna-panoramic-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
