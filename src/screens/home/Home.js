/* eslint-disable prettier/prettier */
// import React from 'react';
// import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
// import {COLORS, ROUTES} from '../../constants';

// const Home = ({navigation}) => {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLORS.bgColor,
//       }}>
//       <Text>This is Home Screen </Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate(ROUTES.ABOUT)}
//         style={styles.button}
//         activeOpacity={0.8}>
//         <Text style={styles.buttonText}>Go to about</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => navigation.navigate(ROUTES.LOGIN)}
//         style={styles.button}
//         activeOpacity={0.8}>
//         <Text style={styles.buttonText}>Log out</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: COLORS.primary,
//     padding: 17,
//     margin: 10,
//     borderRadius: 5,
//     fontSize: 18,
//     width: 180,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   View,
// } from 'react-native';
// import {COLORS, ROUTES} from '../../constants';

// const Home = ({navigation}) => {
//   const data = [
//     {
//       id: 1,
//       title: 'Settings',
//       route: ROUTES.SETTINGS_DETAIL,
//     },
//     {
//       id: 2,
//       title: 'Profile',
//       route: ROUTES.PROFILE,
//     },
//     {
//       id: 3,
//       title: 'Wallet',
//       route: ROUTES.WALLET,
//     },
//     {
//       id: 4,
//       title: 'About',
//       route: ROUTES.ABOUT,
//     },
//     {
//       id: 5,
//       title: 'Search',
//       route: ROUTES.SEARCH,
//     },
//     {
//       id: 6,
//       title: 'Favorites',
//       route: ROUTES.FAVORITES,
//     },
//   ];

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={styles.gridItem}
//       activeOpacity={0.8}
//       onPress={() => navigation.navigate(item.route)}>
//       <Text style={styles.gridItemTitle}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         numColumns={2}
//       />
//       <TouchableOpacity
//         onPress={() => navigation.navigate(ROUTES.LOGIN)}
//         style={styles.button}
//         activeOpacity={0.8}>
//         <Text style={styles.buttonText}>Log out</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.bgColor,
//   },
//   gridItem: {
//     flex: 1,
//     margin: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.primary,
//     height: 120,
//   },
//   gridItemTitle: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: COLORS.primary,
//     padding: 17,
//     margin: 10,
//     borderRadius: 5,
//     fontSize: 18,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   View,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
// import { COLORS, ROUTES } from '../../constants';
// import LinearGradient from 'react-native-linear-gradient';


// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width / 2 - 60;
// const ITEM_HEIGHT = width / 2 - 60;

// const Home = ({ navigation }) => {
//   const data = [
//     // {
//     //   id: 1,
//     //   title: 'Add Students',
//     //   route: ROUTES.AddStudent,
//     //   image: require('../../assets/Screening.png'),
//     // },
//     {
//       id: 2,
//       title: 'Manage Attandance',
//       route: ROUTES.Attendance,
//       image: require('../../assets/attendance.png'),
//     },
//     {
//       id: 3,
//       title: 'Test',
//       route: ROUTES.HomeWork,
//       image: require('../../assets/homework.png'),
//     },
//     {
//       id: 4,
//       title: 'Result',
//       route: ROUTES.ACTIVITES,
//       image: require('../../assets/update.png'),
//     },
//     {
//       id: 5,
//       title: 'Gallery',
//       route: ROUTES.Gallery,
//       image: require('../../assets/gallery.png'),
//     },
//     // {
//     //   id: 6,
//     //   title: 'Send Notifications',
//     //   route: ROUTES.TASK,
//     //   image: require('../../assets/notification.png'),
//     // },
//   ];

//   const renderItem = ({ item }) => {
//     let itemStyle = styles.gridItem;
//   let titleStyle = styles.gridItemTitle;
//   if (['Add Students', 'Test', 'Result', 'Manage Attandance'].includes(item.title)) {
//     itemStyle = [styles.gridItem, styles.centeredItem];
//     titleStyle = [styles.gridItemTitle, styles.centeredTitle];
//   }
    
//   return (
//     <TouchableOpacity
//       style={styles.gridItem}
//       activeOpacity={0.8}
//       onPress={() => navigation.navigate(item.route)}>
//       <ImageBackground source={item.image} style={styles.gridItemImage}>
//         <Text style={styles.gridItemTitle}>{item.title}</Text>
//       </ImageBackground>
//       <Text style={styles.gridItemSubtitle}>{item.subtitle}</Text>
//     </TouchableOpacity>
//   );

//     <LinearGradient
//       colors={['#6441A5', '#2a0845']} // Example gradient colors
//       style={styles.gradientContainer}
//     >
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           contentContainerStyle={styles.gridList}
//         />
//       </SafeAreaView>
//     </LinearGradient>
  
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: COLORS.primary,
//   },
//   gridList: {
//     padding: 20,
//     margin: 20,
//     // marginBottom:40,
//   },
//   gridItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_HEIGHT,
//     borderRadius: 10,
//     margin: 10,
//     // padding:5,
//     backgroundColor: COLORS.white,
//     shadowColor: COLORS.darkGray,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   gradientContainer: {
//     flex: 1,
//   },
//   centeredItem: {
//     // additional styles for centered items if needed
//   },
//   gridItemImage: {
//     width: ITEM_WIDTH - 30,
//     height: ITEM_HEIGHT - 30,
//     resizeMode: 'cover',
//     alignItems: 'center',
//     paddingTop: ITEM_HEIGHT / 2,
//   },
//   gridItemTitle: {
//     position: 'absolute',
//     bottom: -30,
//     width: ITEM_WIDTH - 10,
//     padding: 5,
//     borderRadius: 5,
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     textAlign: 'center',
//     fontSize: 12,
//     fontWeight: 'bold',
//     // color: COLORS.primary,
//     color: 'black',
//   }

// });
// export default Home;

import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2 - 60;
const ITEM_HEIGHT = width / 2 - 60;

const Home = ({ navigation }) => {
  const data = [
    // Your data array here
    
    //   id: 1,
    //   title: 'Add Students',
    //   route: ROUTES.AddStudent,
    //   image: require('../../assets/Screening.png'),
    // },
    {
      id: 2,
      title: 'Quiz',
      route: ROUTES.Quiz,
      image: require('../../assets/homework.png'),
    },
    {
      id: 3,
      title: 'Test Results',
      route: ROUTES.TestResult,
      image: require('../../assets/history.png'),
    },
    {
      id: 4,
      title: 'Blogs',
      route: ROUTES.Blogs,
      image: require('../../assets/blogicon.png'),
    },
    {
      id: 5,
      title: 'Videos',
      route: ROUTES.Gallery,
      image: require('../../assets/video.png'),
    },
    // {
    //   id: 6,
    //   title: 'Send Notifications',
    //   route: ROUTES.Attendance,
    //   image: require('../../assets/immigration.png'),
    // },
  ];

  const renderItem = ({ item }) => {
    let itemStyle = styles.gridItem;
    let titleStyle = styles.gridItemTitle;
    if (['Test', 'Result', 'Manage Attandance','Gallery'].includes(item.title)) {
      itemStyle = [styles.gridItem, styles.centeredItem];
      titleStyle = [styles.gridItemTitle, styles.centeredTitle];
    }

    return (
      <TouchableOpacity
        style={itemStyle}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(item.route)}
      >
        <ImageBackground source={item.image} style={styles.gridItemImage}>
          <Text style={titleStyle}>{item.title}</Text>
        </ImageBackground>
        <Text style={styles.gridItemSubtitle}>{item.subtitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={['#6441A5', '#2a0845']} // Example gradient colors
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.gridList}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridList: {
    // padding: 20,
    // margin: 20,
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20, // Adjust horizontal padding
  marginTop: 20, // Adjust top margin if needed
  marginBottom: 20,
  },
  gridItem: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    margin: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    flex: 1,
  },
  centeredItem: {
    // additional styles for centered items if needed
  },
  gridItemImage: {
    width: ITEM_WIDTH - 30,
    height: ITEM_HEIGHT - 30,
    resizeMode: 'cover',
    alignItems: 'center',
    paddingTop: ITEM_HEIGHT / 2,
  },
  gridItemTitle: {
    position: 'absolute',
    bottom: -30,
    width: ITEM_WIDTH - 10,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  centeredTitle: {
    // additional styles for centered title if needed
  },
});

export default Home;
