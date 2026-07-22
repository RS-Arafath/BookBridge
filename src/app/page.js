import BookMarquee from "@/components/BookMarquee";
import Banner from "@/components/shared/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookMarquee></BookMarquee>
    </div>
  );
}
