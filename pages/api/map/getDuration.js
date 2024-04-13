const getDuration = async (req, res) => {
  const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=pk.eyJ1IjoicGFyc2hhdjEyIiwiYSI6ImNsdXhvZWJldTBxZW0ybG1nbXRoaWhtYTYifQ.6S_rFwhlA0gJo7ewhhUxzw`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    if (data.routes && data.routes[0] && data.routes[0].duration) {
      res.status(200).send({ message: 'success', data: data.routes[0].duration })
    } else {
      res.status(500).send({ message: 'error', data: 'Duration not available' })
    }
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getDuration
