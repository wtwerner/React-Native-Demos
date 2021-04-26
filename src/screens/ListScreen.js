import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 34 },
        { name: 'Friend 2', age: 34 },
        { name: 'Friend 3', age: 34 },
        { name: 'Friend 4', age: 34 },
        { name: 'Friend 5', age: 34 },
        { name: 'Friend 6', age: 34 },
        { name: 'Friend 7', age: 34 },
        { name: 'Friend 8', age: 34 },
        { name: 'Friend 9', age: 34 }
    ]

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }} 
        />
    )
}

export default ListScreen

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
