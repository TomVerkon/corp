import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="factory floor"
      title="Automatic scaling to meet your most demanding needs"
    />
  );
}
