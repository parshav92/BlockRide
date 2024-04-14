import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Navbar from '../components/Navbar';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const style = {
  wrapper: `flex-1 h-full w-full`,
  trafficInfoBox: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    zIndex: '1000',
  },
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_API;

const Map = () => {
    const [pic, setPic] = useState(null);
    const [drop, setDrop] = useState(null);
  useEffect(() => {
    
    const pickupCoordinates = JSON.parse(localStorage.getItem('pickupCoordinates'));
    const dropoffCoordinates = JSON.parse(localStorage.getItem('dropoffCoordinates'));

    const pickupCoords = JSON.parse(localStorage.getItem('pickupCoordinates'));
    const dropoffCoords = JSON.parse(localStorage.getItem('dropoffCoordinates'));

    setPic(pickupCoords);
    setDrop(dropoffCoords);
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [78.9629, 20.5937],
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
      map.addSource('traffic', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1',
      });

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
      );

      // Check if both pickup and dropoff coordinates are available
      if (pickupCoordinates && dropoffCoordinates) {
        // Fit the map to the bounds of the pickup and dropoff coordinates
        map.fitBounds([dropoffCoordinates, pickupCoordinates], {
          padding: 100,
        });

        // Add markers for pickup and dropoff coordinates
        const pickupMarker = new mapboxgl.Marker().setLngLat(pickupCoordinates).addTo(map);
        const dropoffMarker = new mapboxgl.Marker().setLngLat(dropoffCoordinates).addTo(map);

        // Add a line between pickup and dropoff coordinates
        map.addLayer({
          id: 'route',
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
            'line-color': '#ff69b4', // pink color
            'line-width': 5,
          },
        });

        // Add a traffic info box
        const trafficInfoBox = document.createElement('div');
        trafficInfoBox.className = 'traffic-info-box';
        trafficInfoBox.innerHTML = `
          <h3>Traffic Information</h3>
          <p><strong>Start:</strong> ${pickupCoordinates.toString()}</p>
          <p><strong>End:</strong> ${dropoffCoordinates.toString()}</p>
          <p><strong>Traffic Type:</strong> Moderate</p>
        `;
        trafficInfoBox.style.cssText = Object.entries(style.trafficInfoBox)
          .map(([key, value]) => `${key}: ${value}`)
          .join(';');
        map.getContainer().appendChild(trafficInfoBox);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
  <a href='http://localhost:3001/driverprofile'>  <Navbar/></a>
    <div className={style.wrapper}>
      <div id='map' style={{ width: '150%', height: '150vh', position: 'relative' }}>
        <div className="traffic-info-box" style={{ ...style.trafficInfoBox, zIndex: 1000 }}>
          <h3>Traffic Information</h3>
          <p><strong>Start:</strong> {pic}</p>
          <p><strong>End:</strong> {drop}</p>
          <p><strong>Traffic Type:</strong> Moderate</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Map;
