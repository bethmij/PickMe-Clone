import {FlatList, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const data = [
    {
        id:1,
        icon:"home",
        location:"Home",
        destination: "Hapugala, Sri Lanka",
    },
    {
        id:2,
        icon:"briefcase",
        location:"Work",
        destination: "Colombo, Sri Lanka",
    }
]

const NavFavorite = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}
    ItemSeparatorComponent={() => (
        <View style={{height: 0.5, backgroundColor: 'gray'}} />
    )}
    renderItem={({item}) => (
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon
                name={item.icon}
                type="ionicon"
                color="white"
                size={18}
                style={{marginRight: 10, backgroundColor: 'gray', padding: 5, borderRadius: 50}}
            />
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.location}</Text>
                <Text style={{color: 'gray'}}>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )}
/>
  )
}

export default NavFavorite

