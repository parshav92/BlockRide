import { Stepper } from "@mui/material";
import IntWallet from "../components/IntWallet";
import Traffictoast from "../components/Traffictoast";
// import Image from "next/image";
import ProfileDropdown from "@/components/ProfileDropdown";
import VerticalLinearStepper from "../components/Stepper";

export default function Home() {
  return (
    <>
      <div>
        {/* <ProfileDropdown /> */}
        {/* <Traffictoast /> */}
        <VerticalLinearStepper />
        <IntWallet />
      </div>
    </>
  );
}
