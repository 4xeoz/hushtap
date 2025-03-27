import LandingPage from "./_components/LandingPage";
import Header from "./_components/shared/Header";

export default function Home() {
  return (
    <div className=" relative h-screen overflow-clip">
      <Header />
      <LandingPage />
    </div>
  )
}