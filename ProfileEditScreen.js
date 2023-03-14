import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert,  TouchableWithoutFeedback, Keyboard, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles';
import { Pressable } from 'react-native';
import { Picker, picker } from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../src/models';

 
  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const user = await Auth.currentAuthenticatedUser();

  //     const dbUsers = DataStore.query(
  //       User,
  //       u => u.sub === user.attributes.sub,
  //       );

  //       if (dbUsers.length < 0) {
  //         return;
  //       }
  //       const dbUser = dbUsers[0];

  //       setName(dbUser.name);
             
  //   };
  //   getCurrentUser();
  // }, []);

function EditScreen({ navigation }) {

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [lookingfor, setlookingfor] = useState('');
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const userId = currentUser.attributes.sub;
        const fetchedUser = await DataStore.query(User, user => user.sub.eq(userId));
        setName(fetchedUser[0].name);
        setBio(fetchedUser[0]?.bio ?? '');
        setGender(fetchedUser[0]?.gender ?? '');
        setlookingfor(fetchedUser[0]?.lookingfor ?? '');
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  const isValid = () => {
    return name && bio && lookingfor;
  }

  const save = async () => {
    if (!isValid()) {
      console.warn('Not valid');
      return;
    }
  
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      

      const newUser = new User({
        sub: user.attributes.sub,
        name,
        bio,
        gender,
        lookingfor,
        image: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
        imagetwo: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
        imagethree: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg',
        Activity: 'CLIMBING',
        userrelationshipID: 'as',
      });

      console.log(user.attributes.sub);
  
      DataStore.save(newUser);
    } catch (error) {
      console.log(error);
    }
  };
  
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  const removeImage = (index) => {
    const imagesCopy = [...images];
    imagesCopy.splice(index, 1);
    setImages(imagesCopy);
  };

  return (
    <View>
    <TextInput
    type="text"
    style={styles.input} 
    placeholder="Name ..."
    value={name}
    onChange={setName}
    />

    <TextInput
    style={styles.input} 
    placeholder="bio ..."
    multiline
    numberOfLines={3}
    value={bio}
    onChangeText={setBio}
    />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.Editscreenbackground}>
    <View style={styles.Editcontainer}>
      <View style={styles.imageBox}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer} onPress={pickImage}>
            {images[index] ? (
              <>
                <TouchableOpacity style={styles.closeIconContainer} onPress={() => removeImage(index)}>
                  <View style={styles.closeIconCircle}>
                    <MaterialIcons name="close" size={20} color="grey" />
                  </View>
                </TouchableOpacity>
                <Image source={{ uri: images[index] }} style={styles.image} />
              </>
            ) : (
              <MaterialIcons name="add" size={40} color="grey" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
    
    <View style={styles.picker}>
    <Text>Your Gender</Text>
    <Picker
      label="Gender"
      selectedValue={gender}
      onValueChange={itemValue => setGender(itemValue)
      }>
      <Picker.Item label="Male" value="MALE"/>
      <Picker.Item label="Female" value="FEMALE"/>
      {/* <Picker.Item label="Other" value="OTHER"/> */}
    </Picker>

    <Text>Looking For</Text>
    <Picker
      label="Looking for"
      selectedValue={lookingfor}
      onValueChange={itemValue => setlookingfor(itemValue)
      }>
      <Picker.Item label="Anyone" value="ANYONE"/>
      <Picker.Item label="Male" value="MALE"/>
      <Picker.Item label="Female" value="FEMALE"/>
    </Picker>
    </View>

    <Pressable onPress={save} style={styles.savebutton}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
    </Pressable>  
    </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

export { EditScreen };



    {/* <View style={styles.aboutMeContainer}>
      <Text style={styles.aboutMeTitle}>About Me</Text>
      <TextInput
            style={styles.aboutMeInput}
            placeholder="Write something about yourself..."
            placeholderTextColor="grey"
            multiline
            maxLength={250}
            value={aboutMe}
            onChangeText={(text) => setAboutMe(text)}
          />
    </View> */}