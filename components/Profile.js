// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React, {useState} from 'react';

// const Profile = () =>{
//   return (
//     <View style={styles.container}>
//      <Text style={styles.text}> Hello from Profile</Text>
//    </View>
//   );  
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   }
// })

// export default Profile

import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              url: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title, {
              marginTop: 15,
              marginBottom: 5
            }}>Gaston Loukil</Title>
            {/* <Caption style={styles.caption}>11_004</Caption> */}
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        {/* <View style={styles.row}> */}
          {/* <Icon name="map-market-radius" style={{color="#777777"}} size={20} /> */}
          {/* <Text style={{  marginLeft: 20 }}>Ariana,Tunisia</Text> */}
        {/* </View> */}
        {/* <View style={styles.row}> */}
          {/* <Icon name="phone" style={{color="#777777"}} size={20} /> */}
          {/* <Text style={{  marginLeft: 20 }}>53024247</Text> */}
        {/* </View> */}
        <View style={styles.row}>
          {/* <Icon name="email" style={{color="#777777"}} size={20} /> */}
          <Text style={{  marginLeft: 20 }}>gaston@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox, {
          borderRightColor: '#DDDDDD',
          borderRightWidth: 1
        }}>
          <Title>140 </Title>
          <Caption>points</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12 </Title>
          <Caption>Orders</Caption>
        </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              <Icon name="settings-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30, 
  },
  menuItemText: {
    // color: '#7777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26, 
  },
});

