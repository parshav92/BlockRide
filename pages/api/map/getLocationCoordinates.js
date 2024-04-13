const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${"https://api.mapbox.com/geocoding/v5/mapbox.places"}/${req.body.location}.json?access_token=${"pk.eyJ1IjoicGFyc2hhdjEyIiwiYSI6ImNsdXhvZWJldTBxZW0ybG1nbXRoaWhtYTYifQ.6S_rFwhlA0gJo7ewhhUxzw"}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
