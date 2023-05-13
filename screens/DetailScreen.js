
import { View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';


// const renderTaskDetails = ({ item: task }) => {
//     return (
//         <ListItem
//             onPress={() =>
//                 navigation.navigate('DetailScreen', { task })
//             }
//         >

//         </ListItem>
//     )
// };

export default function DetailScreen({ navigation, item: task }) {
    // const { task } = route.params;
    return (
        <ScrollView>
            <Text>Hello</Text>
        </ScrollView>
    )
}
