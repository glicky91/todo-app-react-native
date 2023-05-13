//This is to get practice with navigation and give me another page.. might add on more later
import React from 'react';
import { View } from 'react-native';
import { Tile } from 'react-native-elements';

export default function AboutScreen() {
    return (
        <View>
            <Text>AboutScreen</Text>
            <Tile
                imageSrc={require('../assets/icon.png')}
                icon={{ name: 'list', type: 'font-awesome' }}
            />;
        </View>
    )
}
