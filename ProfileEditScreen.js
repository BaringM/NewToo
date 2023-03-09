import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert,  TouchableWithoutFeedback, Keyboard, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles';

function EditScreen({ navigation }) {
  const [images, setImages] = useState([]);
  const [aboutMe, setAboutMe] = useState('');

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
    <View style={styles.aboutMeContainer}>
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
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

export { EditScreen };

