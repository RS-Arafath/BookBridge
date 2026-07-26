import BookMarquee from "@/components/BookMarquee";
import Banner from "@/components/shared/Banner";
import Image from "next/image";
import FeaturePhoto from "./featurePhoto/page";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookMarquee></BookMarquee>
      <FeaturePhoto></FeaturePhoto>
    </div>
  );
}
