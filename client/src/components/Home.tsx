import Header from "./Header";
import ContentSection from "./ContentSection";
import VideoSection from "./VideoSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Header />
      <VideoSection />
      <ContentSection />
      <Footer />
    </div>
  );
}
