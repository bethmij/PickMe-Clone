import { Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin, selectDestination, setTravelTimeInfo } from '@/slices/navSlice'
import { GOOGLE_MAP_KEY } from '@env'

const MapViewCard = () => {

  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef<MapView | null>(null);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!origin?.location || !destination?.location) return;

    setTimeout(() => {
        mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
        animated: true,
        });
    }, 500); 
    
  }, [origin, destination]);

  useEffect(()=>{
    if (!origin?.location || !destination?.location) return;
    
    const getTravelTime = async () => {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
                units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_KEY}`
        ).then(response => response.json())
        .then(data => {
            dispatch(setTravelTimeInfo(data.rows[0].elements[0]))
        })
    } 
    setTimeout(() => {
        getTravelTime()
    }, 500); 
    
  },[origin, destination, GOOGLE_MAP_KEY])


  return (
    <MapView
    ref={mapRef}
    className='flex-1'
    initialRegion={{
        latitude: origin.location.lat,  
        longitude: origin.location.lng,  
        latitudeDelta: 0.005,  
        longitudeDelta: 0.005,
    }}
    >
      {origin && destination && (
        <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={3}
            strokeColor='black'
        />
      )}

      {origin?.location && (
        < Marker 
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }} 
            title='Origin'
            description={origin.description}
            identifier='origin'
        />
      )}

    {destination?.location && (
        < Marker 
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }} 
            title='Destination'
            description={destination.description}
            identifier='destination'
        />
      )}
    </MapView>
  )
}

export default MapViewCard

