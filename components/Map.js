  import { useEffect, useContext } from 'react'
  import mapboxgl from 'mapbox-gl'
  import { UberContext } from '../context/uberContext'

  const style = {
    wrapper: `flex-1 h-full w-[150%] lg:w-full`,
    trafficInfoBox: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: '1000',
    },
  }

mapboxgl.accessToken = "pk.eyJ1IjoicGFyc2hhdjEyIiwiYSI6ImNsdXhvZWJldTBxZW0ybG1nbXRoaWhtYTYifQ.6S_rFwhlA0gJo7ewhhUxzw";


  const Map = () => {
    const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

    useEffect(() => {
     
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10', // Change map style to your preferred style
        center: [78.9629, 20.5937], // Center the map on India
        zoom: 9, // Zoom level for India
      })

      map.addControl(new mapboxgl.NavigationControl())

      map.on('load', () => {
        map.addSource('traffic', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-traffic-v1',
        })
        
        map.addLayer(
          {
            id: 'traffic-layer',
            type: 'line',
            source: 'traffic',
            'source-layer': 'traffic',
            paint: {
              'line-width': {
                base: 1.5,
                stops: [
                  [12, 2],
                  [22, 180],
                ],
              },
              'line-color': [
                'match',
                ['get', 'congestion'],
                'low',
                '#1a9850',
                'moderate',
                '#91cf60',
                'heavy',
                '#d9ef8b',
                'severe',
                '#fee08b',
                '#ff5050', // Default color for unknown congestion
              ],
              'line-opacity': 0.8,
            },
          },
          'waterway-label'
        )

        // Check if both pickup and dropoff coordinates are available
        if (pickupCoordinates && dropoffCoordinates) {
          // Fit the map to the bounds of the pickup and dropoff coordinates
          map.fitBounds([dropoffCoordinates, pickupCoordinates], {
            padding: 100,
          })

          // Add markers for pickup and dropoff coordinates
          const pickupMarker = new mapboxgl.Marker().setLngLat(pickupCoordinates).addTo(map)
          const dropoffMarker = new mapboxgl.Marker().setLngLat(dropoffCoordinates).addTo(map)

          // Add a traffic info box
          const trafficInfoBox = document.createElement('div')
          trafficInfoBox.className = 'traffic-info-box'
          trafficInfoBox.innerHTML = `
            <h3>Traffic Information</h3>
            <p><strong>Start:</strong> ${pickupCoordinates.toString()}</p>
            <p><strong>End:</strong> ${dropoffCoordinates.toString()}</p>
            <p><strong>Traffic Type:</strong> Moderate</p>
          `
          trafficInfoBox.style.cssText = Object.entries(style.trafficInfoBox).map(([key, value]) => `${key}: ${value}`).join(';')
          map.getContainer().appendChild(trafficInfoBox)

          // Add route line between pickup and dropoff with a very dark pink color
          map.addLayer({
            id: 'route-line',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [pickupCoordinates, dropoffCoordinates],
                },
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#8B008B', // Dark pink color
              'line-width': 4,
            },
          })
        }
      })

      return () => {
        map.remove()
      }
    }, [pickupCoordinates, dropoffCoordinates])

    return (
      <div className={style.wrapper}>
        <div id='map' style={{ width: '100%', height: '150vh', position: 'relative' }}></div>
      </div>
    )
  }

  export default Map
