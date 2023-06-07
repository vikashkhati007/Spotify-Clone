import Navbar from "../../components/navbar";
import HomeBody from "../../components/body";
export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen">
        <Navbar />
        <HomeBody/>
      </div>
    </>
  );
}
