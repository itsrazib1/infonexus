import PartOne from "@/Component/HomePage/PartOne/PartOne";
import PartThree from "@/Component/HomePage/PartThree/PartThree";
import PartTwo from "@/Component/HomePage/PartTwo/PartTwo";
import Weather from "@/Component/Weather/Weather";


export default function Home() {
  return (
    <main className="">
      <PartOne />
      <Weather/>
      <PartTwo />
      <PartThree />
    </main>
  );
}