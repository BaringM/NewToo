// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert,  TouchableWithoutFeedback, Keyboard, } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons } from '@expo/vector-icons';
// import { styles } from '../styles';
// import { Pressable } from 'react-native';
// import { Picker, picker } from '@react-native-picker/picker';
// import { Auth, DataStore } from 'aws-amplify';
// import { User } from '../src/models';

// function EditScreen({ navigation }) {

//   const [currentUser, setCurrentUser] = useState(null);
//   const [images, setImages] = useState([]);
//   const [name, setName] = useState('');
//   const [bio, setBio] = useState('');
//   const [gender, setGender] = useState('');
//   const [lookingfor, setlookingfor] = useState('');
  
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await Auth.currentAuthenticatedUser();
//         const userId = currentUser.attributes.sub;
//         const fetchedUser = await DataStore.query(User, user => user.sub.eq(userId));

//         setCurrentUser(fetchedUser[0] || {});

//         setName(fetchedUser[0]?.name?.toString() ?? '');
//         setBio(fetchedUser[0]?.bio ?? '');
//         setGender(fetchedUser[0]?.gender ?? '');
//         setlookingfor(fetchedUser[0]?.lookingfor ?? '');
//         console.log(fetchedUser[0].name);
//         console.log(typeof fetchedUser[0].name);
//         // console.log(fetchedUser);
//       } catch (error) {
//         console.log('Error fetching user:', error);
//       }
    
//     };
//     fetchUser();
    
//   }, []);

//   const isValid = () => {
//     return name && bio && lookingfor;
//   }

//   const save = async () => {
//     if (!isValid()) {
//       console.warn('Not valid');
//       return;
//     }
  
//     console.log(name, bio, gender, lookingfor);
//     console.log(typeof name, typeof bio, typeof gender, typeof lookingfor);
//     const currentUser = await Auth.currentAuthenticatedUser();

//     if (currentUser) {
//       const updatedUser = User.copyOf(currentUser, (updated) => {
//         updated.name = String(name);
//         updated.bio = bio;
//         updated.gender = gender;
//         updated.lookingfor = lookingfor;
//         return updated;
//       }); 
  
//       await DataStore.save(updatedUser);
 
//     } else {
 
//       const authUser = await Auth.currentAuthenticatedUser();
  
//       const newUser = new User({
//         sub: authUser.attributes.sub,
//         name,
//         bio,
//         gender,
//         lookingfor,
//         image: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
//         imagetwo: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
//         imagethree: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
//         Activity: 'CLIMBING',
//         userrelationshipID: 'as',
//       });
  
//       console.log(authUser.attributes.sub);

//       console.log('New user:', newUser);
  
//       await DataStore.save(newUser);
  
//       Alert.alert('User saved stayed same');
//     }
//     Alert.alert('User saved successfully');
//   };
  

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImages([...images, result.uri]);
//     }
//   };

//   const removeImage = (index) => {
//     const imagesCopy = [...images];
//     imagesCopy.splice(index, 1);
//     setImages(imagesCopy);
//   };

//   return (
//     <View>
//     <TextInput
//     type="text"
//     style={styles.input} 
//     placeholder="Name ..."
//     value={name}
//     onChangeText={setName}
//     />

//     <TextInput
//     style={styles.input} 
//     placeholder="bio ..."
//     multiline
//     numberOfLines={3}
//     value={bio}
//     onChangeText={setBio}
//     />
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     <View style={styles.Editscreenbackground}>
//     <View style={styles.Editcontainer}>
//       <View style={styles.imageBox}>
//         {[1, 2, 3, 4, 5, 6].map((item, index) => (
//           <TouchableOpacity key={index} style={styles.imageContainer} onPress={pickImage}>
//             {images[index] ? (
//               <>
//                 <TouchableOpacity style={styles.closeIconContainer} onPress={() => removeImage(index)}>
//                   <View style={styles.closeIconCircle}>
//                     <MaterialIcons name="close" size={20} color="grey" />
//                   </View>
//                 </TouchableOpacity>
//                 <Image source={{ uri: images[index] }} style={styles.image} />
//               </>
//             ) : (
//               <MaterialIcons name="add" size={40} color="grey" />
//             )}
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
    
//     <View style={styles.picker}>
//     <Text>Your Gender</Text>
//     <Picker
//       label="Gender"
//       selectedValue={gender}
//       onValueChange={itemValue => setGender(itemValue)
//       }>
//       <Picker.Item label="Male" value="MALE"/>
//       <Picker.Item label="Female" value="FEMALE"/>
//       {/* <Picker.Item label="Other" value="OTHER"/> */}
//     </Picker>

//     <Text>Looking For</Text>
//     <Picker
//       label="Looking for"
//       selectedValue={lookingfor}
//       onValueChange={itemValue => setlookingfor(itemValue)
//       }>
//       <Picker.Item label="Anyone" value="ANYONE"/>
//       <Picker.Item label="Male" value="MALE"/>
//       <Picker.Item label="Female" value="FEMALE"/>
//     </Picker>
//     </View>

//     <Pressable onPress={save} style={styles.savebutton}>
//       <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
//     </Pressable>  
//     </View>
//     </TouchableWithoutFeedback>
//     </View>
//   );
// }

// export { EditScreen };
