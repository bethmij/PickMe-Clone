import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setOrigin, setDestination, selectOrigin, selectDestination, selectInitialValue } from '@/slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { GOOGLE_MAP_KEY } from '@env';



interface Props {
  type: 'origin' | 'destination';
  color: string;
}

const GooglePlacesField = ({ type, color }: Props) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const initialValue = useSelector(selectInitialValue);
  const destination = useSelector(selectDestination);
  const [placeholderText, setPlaceholderText] = useState('');
  const [inputValue, setInputValue] = useState(initialValue); 

  useEffect(() => {
    setPlaceholderText (initialValue !=="" && type === 'origin' ? initialValue : type === 'origin' ? 'Where from?' : 'Enter Your Destination?')
  }, [initialValue]);

  

  return (
    <View style={{ zIndex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        styles={{
          container: {
            flex: 0,
            position: 'relative',
          },
          textInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: color,
            borderRadius: 25,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          },
          textInput: {
            fontSize: 18,
            flex: 1,
            backgroundColor: color,
          },
          listView: {
            zIndex: 2,
          },
        }}
        renderLeftButton={() => (
          <Icon
            name='search'
            type='ionicon'
            color='#B8B7B6'
            style={{ marginRight: 10 }}
          />
        )}
        onPress={(data, details = null) => {
          if (type === 'origin' && details) {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));

            dispatch(setDestination(null));

          } else if (type === 'destination' && details) {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description,
            }));
          }
          setInputValue(data.description); 
          
        }}
        textInputProps={{
            value: inputValue,  
            onChangeText: setInputValue,  
          }}
       
        enablePoweredByContainer={false}
        fetchDetails={true}
        minLength={2}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={100}
      />
    </View>
  );
};

export default GooglePlacesField;
