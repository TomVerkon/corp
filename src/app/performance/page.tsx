import Hero from "@/components/hero";
import performamceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performamceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
