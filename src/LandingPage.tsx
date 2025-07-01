import { FC, useState } from "react";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import Header from "./Header";
import ThreeHero from "./GalaxyHero/GalaxyHero";
import MarketSection from "./MarketSection";
import TradeSection from "./TradeSection";
import PortfolioSection from "./PortfolioSection";
import ForexNewsSection from "./ForexNewsSection";
import Footer from "./Footer";

const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <style>{`html { scroll-behavior: smooth; }`}</style>

      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />

        <div id="home">
          <ThreeHero />
        </div>

        <div id="markets">
          <MarketSection />
        </div>

        <div id="trade">
          <TradeSection />
        </div>

        <div id="portfolio">
          <PortfolioSection />
        </div>

        <div id="news">
          <ForexNewsSection />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
