import BookMarquee from "@/components/BookMarquee";
import Banner from "@/components/shared/Banner";
import Image from "next/image";

import FeatureBooks from "./featureBooks/page";
import AllBooks from "@/components/AllBooks";
import HowItWorks from "@/components/HowItWorks";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookMarquee></BookMarquee>
      <FeatureBooks></FeatureBooks>
      <AllBooks></AllBooks>
      <HowItWorks></HowItWorks>
    </div>
  );
}
