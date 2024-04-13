"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Create an account",
    description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Verify Wallet",
    description:
      "To complete your registration, verify your wallet by providing necessary details and confirming your identity.",
  },
  {
    label: "Schedule Ride",
    description: `Schedule your ride by selecting the desired date and time. You can also specify any special requirements or preferences for your journey.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="max-w-md mx-auto mt-8">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .MuiStepLabel-active, & .MuiStepIcon-active": {
            color: "black",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography className="font-medium">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box className="mb-4">
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className="mt-2 mr-2 bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    className="mt-2 mr-2 text-gray-800 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper elevation={0} className="p-4 bg-white text-black ">
          <Typography>All steps completed</Typography>
          <Button
            onClick={handleReset}
            className="mt-2 mr-2 text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-900 focus:outline-none focus:ring-gray-500 focus:ring-opacity-50"
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
