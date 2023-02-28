import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; // import MaterialIcons from expo vector-icons library
import { styles } from '../styles';

function EditScreen({ navigation }) {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.uri]);
    }
  };

  return (
    <View style={styles.Editcontainer}>

      <View style={styles.imageBox}>
        
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer} onPress={pickImage}>
            {images[index] ? (
              <Image source={{ uri: images[index] }} style={styles.image} />
            ) : (
              <MaterialIcons name="add" size={40} color="grey" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export { EditScreen };

