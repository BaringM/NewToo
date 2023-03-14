import React from 'react';
import { Pressable } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Auth } from 'aws-amplify'; 


function SettingsScreen({ navigation }) {
    return (   
        <View style={styles.container}>
            <Pressable onPress={() => Auth.signOut() } style={styles.signoutbutton} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign out</Text>
            </Pressable>
        </View>
    );
  }


export { SettingsScreen };

// import React, { useState } from 'react';
// import { Pressable } from 'react-native';
// import { View, Text } from 'react-native';
// import { styles } from '../styles';
// import { Auth } from 'aws-amplify'; 

// function SettingsScreen({ navigation }) {
//   const [activityFilter, setActivityFilter] = useState('');
//   const [distanceFilter, setDistanceFilter] = useState(10);

//   const handleActivityFilter = (activity) => {
//     setActivityFilter(activity);
//   };

//   const handleDistanceFilter = (distance) => {
//     setDistanceFilter(distance);
//   };

//   return (   
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Text style={styles.filterLabel}>Activity:</Text>
//         <View style={styles.filterButtons}>
//           <Pressable
//             style={[styles.filterButton, activityFilter === 'Running' && styles.activeFilterButton]}
//             onPress={() => handleActivityFilter('Running')}
//           >
//             <Text style={[styles.filterButtonText, activityFilter === 'Running' && styles.activeFilterButtonText]}>Running</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.filterButton, activityFilter === 'Cycling' && styles.activeFilterButton]}
//             onPress={() => handleActivityFilter('Cycling')}
//           >
//             <Text style={[styles.filterButtonText, activityFilter === 'Cycling' && styles.activeFilterButtonText]}>Cycling</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.filterButton, activityFilter === 'Swimming' && styles.activeFilterButton]}
//             onPress={() => handleActivityFilter('Swimming')}
//           >
//             <Text style={[styles.filterButtonText, activityFilter === 'Swimming' && styles.activeFilterButtonText]}>Swimming</Text>
//           </Pressable>
//           {/* add more activity filters here */}
//         </View>
//       </View>

//       <View style={styles.filterContainer}>
//         <Text style={styles.filterLabel}>Distance (km): {distanceFilter}</Text>
//         <View style={styles.filterButtons}>
//           <Pressable
//             style={styles.filterButton}
//             onPress={() => handleDistanceFilter(distanceFilter - 1 >= 1 ? distanceFilter - 1 : 1)}
//           >
//             <Text style={styles.filterButtonText}>-</Text>
//           </Pressable>
//           <Text style={styles.filterButtonText}>{distanceFilter}</Text>
//           <Pressable
//             style={styles.filterButton}
//             onPress={() => handleDistanceFilter(distanceFilter + 1 <= 50 ? distanceFilter + 1 : 50)}
//           >
//             <Text style={styles.filterButtonText}>+</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Pressable onPress={() => Auth.signOut() } style={styles.signoutbutton} >
//         <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign out</Text>
//       </Pressable>
//     </View>
//   );
// }

// export { SettingsScreen };