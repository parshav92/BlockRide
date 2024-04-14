import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'


const style = {
  wrapper: `flex-1 h-full w-[150%] lg:w-full`,
  trafficInfoBox: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    zIndex: '-10',
  },
}


const token = process.env.NEXT_PUBLIC_MAP_API;
// console.log(token)

mapboxgl.accessToken=process.env.NEXT_PUBLIC_MAP_API;


const Map = () => {
 

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

    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className={style.wrapper}>
      <div id='map' style={{ width: '100%', height: '100vh', position: 'absolute' }}></div>
    </div>
  )
}

export default Map
