















import RideSelector from './RideSelector'
import { useContext ,useState , useEffect } from 'react'
import { UberContext } from '../context/uberContext'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils';

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
      if (typeof price !== 'undefined' && typeof price === 'string') {
        // Convert gas value to hex string
        const gasLimit = ethers.utils.hexlify(520000);
        
        // Convert price to wei (smallest unit of Ether) and then to hex string
        const valueInWei = ethers.utils.parseEther(price);
        const valueInHex = ethers.utils.hexlify(valueInWei);
        
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
        });

        await metamask.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: "0x9Ced2ef5921d9B6448424605Fa27BD7f265cD6AE",
              gas: gasLimit,
              value: valueInHex,
            },
          ],
        });

        setBookingConfirmed(true);
      } else {
        console.error('Price must be a defined string.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (bookingConfirmed) {
      // Display the alert
      alert('Booking confirmed. Please rate the Uber driver .')
      window.location.href = 'https://block-ride14.vercel.app/rating';
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
