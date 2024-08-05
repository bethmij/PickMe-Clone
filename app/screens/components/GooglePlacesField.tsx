import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GOOGLE_MAP_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setOrigin, setDestination, selectOrigin, selectDestination } from '@/slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';

interface Props {
    type: 'origin' | 'destination';
}

const GooglePlacesField = ({ type }: Props) => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const placeholderText = type === 'origin' ? 'Where from?' : 'Enter Your Destination?';

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
                        backgroundColor: '#EBEAE0',
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
                        backgroundColor: '#EBEAE0',
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
}

export default GooglePlacesField;
