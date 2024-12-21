import Image from "next/image";
import { FloatingNavbar } from "../components/floatingNavbar";
export default function Home() {
  var bunchoftext = <div>hello</div>;
  for (var i = 0; i < 10000; i++) {
    bunchoftext += <div>hello</div>;
  }
  return (
    <div>
      <FloatingNavbar />
      <Image src="/image.jpg" alt="image" width={500} height={500} />
      <h1>{bunchoftext}</h1>
      </div>
  );
}
