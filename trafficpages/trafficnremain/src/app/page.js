import IntWallet from "../components/IntWallet";
import Traffictoast from "../components/Traffictoast";
// import Image from "next/image";
import ProfileDropdown from "@/components/ProfileDropdown";

export default function Home() {
  return (
    <>
      <div>
        {/* <Traffictoast /> */}

        <IntWallet />
        <ProfileDropdown />
      </div>
    </>
  );
}
