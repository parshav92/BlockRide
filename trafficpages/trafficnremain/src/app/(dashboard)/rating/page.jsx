'use client'
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Map from "../../map";
import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";


const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [open, setOpen] = useState(false);

  const toggleCard = () => {
    setOpen(!open);
  };

  const handleSendTransaction = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const currentAccount = (await provider.listAccounts())[0]; // Get the current account from MetaMask
      const gasLimit = 21000; // Example gas limit
      const valueInEther = 0.001; // Example value to send in Ether
      const valueInWei = ethers.utils.parseEther(valueInEther.toString()); // Convert value to Wei
      const transaction = await signer.sendTransaction({
        to: "0x9Ced2ef5921d9B6448424605Fa27BD7f265cD6AE",
        value: valueInWei,
        gasLimit: gasLimit,
      });
      await transaction.wait();
      console.log("Transaction successful");
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };
  

  return (
    <>
    <Map />
      <div className="flex z-50 flex-col items-center justify-center h-screen ">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div className="flex z-50 justify-center">
            <Card className="bg-blue-100 backdrop-blur-xl border z-50 border-blue-400 mb-4 rounded-lg shadow-md w-full max-w-sm">
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={value}
                    className="z-50"
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </div>
        </Slide>
        <button onClick={toggleCard} className="bg-gray-300 z-50 backdrop-blur-xl px-4 py-2 rounded-md">
          Rate Now
        </button>
        {/* <button onClick={handleSendTransaction} className="bg-gray-300 z-50 backdrop-blur-xl px-4 py-2 rounded-md">
          Send Sepholia
        </button> */}
      </div>
    </>
  );
}