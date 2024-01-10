import React from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';

const IconButton = ({color, icon, size, onPress}) => {
  return (
<View>

    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
</View>
  )
}

export default IconButton
const styles= StyleSheet.create({
    pressed:{opacity:.75}
})