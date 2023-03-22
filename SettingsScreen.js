import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../src/models';

function SettingsScreen({ navigation }) {

    const [user, setUser] = useState(null);

    const [name, setName] = useState(''); 
    const [bio, setBio] = useState(''); 
    const [gender, setGender] = useState('');
    const [LookingFor, setLookingFor] = useState('');

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            
            const currentUser = await Auth.currentAuthenticatedUser();
            const userId = currentUser.attributes.sub;
            const dbUsers = await DataStore.query(User, user => user.sub.eq(userId));

            if (dbUsers.length < 0) {
                return;
            }

            const dbUser = dbUsers[0];
            setUser(dbUser);

            setName(dbUser.name);
            setBio(dbUser.bio); 
            setGender(dbUser.gender);
            setLookingFor(dbUser.LookingFor);

        };
        getCurrentUser();
    }, []);

    const isValid = () => {
        return name && bio && gender && LookingFor;
    }

    const save = async () => {

        if (!isValid()){
            console.warn('Not Valid');
            return;
        }

        if (user) {
            const updatedUser = User.copyOf(user, (updated) => {
                updated.name = name;
                updated.bio = bio;
                updated.gender = gender;
                updated.LookingFor = LookingFor;
            });

            await DataStore.save(updatedUser);      
        } else {

            const authUser = await Auth.currentAuthenticatedUser();


            const newUser = new User({    
                sub: authUser.attributes.sub,
                name,
                bio,
                gender,
                LookingFor,
                matchID: 'Id1',
            });
            
            await DataStore.save(newUser);
         }

         Alert.alert("User saved successfully");

    };

    return (   
        <View style={styles.container}>

            <TextInput 
                style={styles.input}
                placeholder="Name.."
                value={name}
                onChangeText={setName}
            />    

            <TextInput 
                style={styles.input}
                placeholder="Bio.."
                multiline
                numberOfLines={3}
                value={bio}
                onChangeText={setBio}
            />   

            <Text>Gender</Text>

            <Picker
                label= "Gender"
                selectedValue={gender}
                onValueChange={itemValue => setGender(itemValue)}>
            <Picker.Item label="Male" value="MALE" />
            <Picker.Item label="Female" value="FEMALE" />
            <Picker.Item label="Other" value="OTHER" />
            </Picker>

            <Text>Looking For</Text>

            <Picker
                label= "Looking For"
                selectedValue={LookingFor}
                onValueChange={itemValue => setLookingFor(itemValue)}>
                <Picker.Item label="Male" value="MALE" />
                <Picker.Item label="Female" value="FEMALE" />
                <Picker.Item label="Other" value="OTHER" />
            </Picker>

            <Pressable onPress={save} style={styles.signoutbutton} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
            </Pressable>

            <Pressable onPress={() => Auth.signOut() } style={styles.signoutbutton} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign out</Text>
            </Pressable>

        </View>
    )
  };

const styles = StyleSheet.create({
    container: { 
        padding:10,
    },
    signoutbutton: {
        backgroundColor: 'green',
        height: 30,
        // width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
      },
      input: {
        margin: 10,
        borderBottomColor:'grey',
        borderBottomWidth: 2,
      },
    
});
  

export { SettingsScreen };
