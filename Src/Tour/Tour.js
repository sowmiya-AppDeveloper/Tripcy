import React from 'react';
import {StyleSheet} from 'react-native';
import CustomCarousel from '../Components/CustomCaurosal';

const data = [
  {
    id: 1,
    title: 'Explore the world',
    description: 'Discover beauty and make happy memories',
    image: require('../Assets/Images/img1.png'),
    imgTitle: require('../Assets/Images/img1Title.png'),
  },
  {
    id: 2,

    title: 'Safe Journey',
    description: 'Enjoy secure and peaceful trips',
    image: require('../Assets/Images/img2.png'),
    imgTitle: require('../Assets/Images/img2Title.png'),
  },
  {
    id: 3,
    title: 'Peace of Mind',
    description: 'Travel and find inner peace',
    image: require('../Assets/Images/img3.png'),
    imgTitle: require('../Assets/Images/img3Title.png'),
  },
];

const App = () => {
  return <CustomCarousel data={data} />;
};

export default App;
