import { useState, useEffect, useRef } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Copy, Check, ExternalLink, ChevronDown } from "lucide-react";
import { Toaster, toast } from "sonner";

// Constants - Browt Branding
const CA = "0xpumpfun";
const BUY_URL =
  "https://pump.fun/coin/0xpumpfun";
const X_URL = "https://x.com/#";
const X_COMMUNITY_URL = "https://x.com/i/communities/#";
const DEXSCREENER_EMBED_URL =
  "https://dexscreener.com/solana/0xcomingsoon?embed=1&theme=dark&trades=0&info=0";
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/lo3clpz5_image.png";
const HERO_BG_URL =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/nhy5gruh_image.jpeg";
const BANNER_IMAGE_URL =
  "https://customer-assets.emergentagent.com/job_aebb9376-b254-4e77-9828-009aed10a563/artifacts/hw2zszbq_IMG_5680.jpeg";

// Section Background Images
const BG_INTRO =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/258bt5nv_image.jpeg"; // Full body white - Intro
const BG_LORE =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/hqlvm53h_image.jpeg"; // Tropical scene - Lore
const BG_CHART =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/x98b3ngr_image.jpeg"; // Helmet dark - Chart
const BG_HOWTOBUY =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/druxka9t_image.jpeg"; // Close-up face - How to Buy
const BG_FOOTER =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/2i3vja1j_image.jpeg"; // Action pose pink - Footer

// Intro Page Component
const IntroPage = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#0a2010] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={BG_INTRO}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2010]/80 via-[#0a2010]/60 to-[#0a2010]/80" />
      </div>

      {/* Logo */}
      <motion.img
        src={LOGO_URL}
        alt="Browt"
        className="w-48 h-48 md:w-64 md:h-64 object-contain mb-8 relative z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
      />

      {/* Title */}
      <motion.h1
        className="font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow text-center mb-4 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        $BROWT
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-bangers text-xl md:text-2xl text-[#7CFC00] text-shadow-sm mb-12 text-center relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        10TH GENERATION GRASS-TYPE POKEMON
      </motion.p>

      {/* Enter Button */}
      <motion.button
        onClick={onEnter}
        className="btn-primary px-12 py-5 text-3xl animate-pulse-glow relative z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="enter-button"
      >
        ENTER BROWT
      </motion.button>

      {/* Hint text */}
      <motion.p
        className="font-mono text-sm text-[#7CFC00] mt-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Click to enter the world of Browt
      </motion.p>
    </motion.div>
  );
};

// X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Community Icon Component
const CommunityIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// Scroll Down Arrow Component
const ScrollArrow = () => (
  <div className="flex justify-center py-8">
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-[#FFDA44]"
    >
      <ChevronDown size={40} />
    </motion.div>
  </div>
);

// Hero Section
const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast.success("Contract Address Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-[#0a2010]">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_URL}
          alt=""
          className="w-full h-full object-cover"
          data-testid="hero-background"
        />
        <div className="absolute inset-0 bg-[#0a2010]/50" />
      </div>

      {/* Main Logo */}
      <motion.div
        className="mb-8 z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <img
          src={LOGO_URL}
          alt="Browt - 10th Generation Grass-Type Pokemon"
          className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
          data-testid="hero-logo"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="font-bangers text-6xl md:text-8xl lg:text-9xl text-[#FFDA44] text-shadow text-center z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        data-testid="hero-title"
      >
        $BROWT
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-bangers text-2xl md:text-4xl text-[#7CFC00] text-shadow-sm mt-4 text-center z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        data-testid="hero-subtitle"
      >
        10TH GENERATION GRASS-TYPE POKEMON
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-10 py-4 text-2xl flex items-center gap-3 hover:rotate-0 transition-transform"
          data-testid="buy-button"
        >
          BUY $BROWT
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn border-[#FFDA44] text-[#FFDA44] hover:border-[#7CFC00]"
          data-testid="x-link"
          title="X Profile"
        >
          <XIcon className="w-7 h-7" />
        </a>
        <a
          href={X_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn border-[#7CFC00] text-[#7CFC00] hover:border-[#FFDA44]"
          data-testid="community-link"
          title="X Community"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </a>
      </motion.div>

      {/* Contract Address */}
      <motion.div
        className="mt-12 w-full max-w-2xl px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div
          className={`ca-box p-4 cursor-pointer transition-all ${
            copied ? "copy-success" : ""
          }`}
          onClick={copyCA}
          data-testid="contract-address"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs md:text-sm text-[#90EE90] break-all">
              {CA}
            </p>
            <button className="flex-shrink-0 text-[#FFDA44] hover:text-[#7CFC00] transition-colors">
              {copied ? <Check size={24} /> : <Copy size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#FFDA44]"
        >
          <ChevronDown size={40} />
        </motion.div>
      </div>
    </section>
  );
};

// Marquee Section
const MarqueeSection = () => (
  <div className="marquee-container py-3" data-testid="marquee-section">
    <Marquee gradient={false} speed={60}>
      <span className="font-bangers text-3xl md:text-4xl text-[#006400] mx-8">
        $BROWT
      </span>
      <span className="font-bangers text-3xl md:text-4xl text-[#006400] mx-8">
        GRASS-TYPE POKEMON
      </span>
      <span className="font-bangers text-3xl md:text-4xl text-[#006400] mx-8">
        10TH GENERATION
      </span>
      <span className="font-bangers text-3xl md:text-4xl text-[#006400] mx-8">
        PUMP IT
      </span>
      <span className="font-bangers text-3xl md:text-4xl text-[#006400] mx-8">
        BROWT ON SOLANA
      </span>
    </Marquee>
  </div>
);

// Lore Images - Tweet Screenshots
const LORE_IMAGE_1 =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/4n1jfg0g_image.png"; // Dexerto tweet
const LORE_IMAGE_2 =
  "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/qkhitocc_image.png"; // IGN tweet
const LORE_IMAGE_3 =
  "/assets/HCc2UrfWoAATcwi.jpg"; // Reporting for duty
const LORE_IMAGE_4 =
  "/assets/HCoUCSuXkAAXy9e.jpg"; // Heard you twin
const LORE_IMAGE_5 =
  "/assets/HClq3UaWQAA1hAO.jpg"; // Hearing things

// Lore Section
const LoreSection = () => (
  <section
    className="py-24 px-4 relative overflow-hidden"
    data-testid="lore-section"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={BG_LORE} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0a2010]/70" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-12 text-center">
          THE LORE
        </h2>

        {/* Tweet Images Grid - First Row (2 images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LORE_IMAGE_1}
              alt="Dexerto Tweet - 10th Generation Pokemon Starters Revealed"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LORE_IMAGE_2}
              alt="IGN Tweet - Pokemon Winds and Waves Starters"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Tweet Images Grid - Second Row (3 images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LORE_IMAGE_3}
              alt="Browt Tweet - Reporting for duty"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LORE_IMAGE_4}
              alt="Browt Tweet - Heard you twin"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={LORE_IMAGE_5}
              alt="Browt Tweet - Hearing things"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
      <ScrollArrow />
    </div>
  </section>
);

// Live Chart Section
const LiveChartSection = () => (
  <section
    className="py-24 px-4 relative overflow-hidden"
    data-testid="chart-section"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={BG_CHART} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0a2010]/80" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto">
      <motion.h2
        className="font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        LIVE CHART
      </motion.h2>

      <motion.div
        className="w-full rounded-lg overflow-hidden border-4 border-[#7CFC00] shadow-lg shadow-[#7CFC00]/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <iframe
          src={DEXSCREENER_EMBED_URL}
          title="Browt Live Chart"
          className="w-full h-[500px] md:h-[600px]"
          frameBorder="0"
          allowFullScreen
        />
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://dexscreener.com/solana/0xcomingsoon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 px-8 py-3"
        >
          <ExternalLink size={20} />
          View on DexScreener
        </a>
      </motion.div>
      <ScrollArrow />
    </div>
  </section>
);

// How to Buy Section
const HowToBuySection = () => {
  const steps = [
    {
      number: "1",
      title: "Create a Wallet",
      description:
        "Download Phantom or Solflare wallet and create a new wallet. Save your seed phrase safely.",
    },
    {
      number: "2",
      title: "Get SOL",
      description:
        "Buy SOL from an exchange like Coinbase or Binance and send it to your wallet address.",
    },
    {
      number: "3",
      title: "Go to PumpFun",
      description:
        "Visit pump.fun and connect your wallet. Search for $Browt or use our direct link.",
    },
    {
      number: "4",
      title: "Swap for $Browt",
      description:
        "Enter the amount of SOL you want to swap and confirm the transaction. Welcome to the Browt family!",
    },
  ];

  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      data-testid="how-to-buy-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={BG_HOWTOBUY} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a2010]/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          className="font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-16 text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          HOW TO BUY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="step-card card-wood p-6 pl-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`step-${step.number}`}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="font-bangers text-2xl text-[#FFDA44] mb-3">
                {step.title}
              </h3>
              <p className="font-mono text-sm text-[#90EE90]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-12 py-5 text-2xl"
            data-testid="buy-button-secondary"
          >
            <ExternalLink size={24} />
            BUY ON PUMPFUN
          </a>
        </motion.div>
        <ScrollArrow />
      </div>
    </section>
  );
};

// Footer Section
const FooterSection = () => (
  <footer
    className="py-16 px-4 relative overflow-hidden"
    data-testid="footer-section"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={BG_FOOTER} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0a2010]/70" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and name */}
        <div className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="Browt"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h3 className="font-bangers text-3xl text-[#FFDA44]">$BROWT</h3>
            <p className="font-mono text-sm text-[#7CFC00]">
              10th Gen Grass-Type
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 flex items-center gap-2"
          >
            <XIcon className="w-5 h-5" />X
          </a>
          <a
            href={X_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 flex items-center gap-2 border-[#7CFC00] text-[#7CFC00] hover:bg-[#7CFC00] hover:text-[#0a2010]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            Community
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 pt-8 border-t border-[#7CFC00]/30">
        <p className="font-mono text-xs text-[#90EE90]/70 text-center max-w-2xl mx-auto">
          $BROWT is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. The coin is
          completely useless and for entertainment purposes only.
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="font-mono text-sm text-[#7CFC00]">
          $BROWT - 10TH GENERATION GRASS-TYPE - 2026
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className="App min-h-screen bg-[#0a2010]">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a4020",
            color: "#FFDA44",
            border: "2px solid #7CFC00",
            fontFamily: '"JetBrains Mono", monospace',
          },
        }}
      />

      <AnimatePresence mode="wait">
        {!entered ? (
          <IntroPage key="intro" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <MarqueeSection />
            <LoreSection />
            <LiveChartSection />
            <HowToBuySection />
            <MarqueeSection />
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
