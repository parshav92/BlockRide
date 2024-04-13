import RideSelector from './RideSelector'
import { useContext ,useState , useEffect } from 'react'
import { UberContext } from '../context/uberContext'
import { ethers } from 'ethers'

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(UberContext)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const storeTripDetails = async (pickup, dropoff) => {
    try {
      await fetch('/api/db/saveTrips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
        }),
      })

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: "0x9Ced2ef5921d9B6448424605Fa27BD7f265cD6AE",
            gas: '0x7EF40', // 520000 Gwei
            value: ethers.utils.parseEther(price)._hex,
          },
        ],
      })


      setBookingConfirmed(true)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (bookingConfirmed) {
      // Display the alert
      alert('Booking confirmed. Please rate the Uber driver and route.')
      // Reset the booking confirmation state after displaying the alert
      setBookingConfirmed(false)
    }
  }, [bookingConfirmed])

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup, dropoff)}
          >
            Confirm {selectedRide.service || 'Blockto'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
