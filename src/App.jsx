import React from "react";
import Joyride, { STATUS } from "react-joyride";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards.jsx";
import CustomTooltip from "./components/CustomTooltip.jsx";

export default function App() {
  const [run, setRun] = React.useState(false);

  const steps = [
    {
      target: '[data-tour="navbar"]',
      content: "This is your Navbar — use it to navigate the app.",
      title: "Navbar",
      disableBeacon: true,
    },
    {
      target: '[data-tour="hero"]',
      content: "Here’s the Hero section: the main headline and call-to-action.",
      title: "Hero Section",
    },
    {
      target: '[data-tour="cards"]',
      content: "These cards highlight your features or services.",
      title: "Feature Cards",
    },
    {
      target: "body",
      placement: "center",
      content: "Tour completed! You now understand the app layout. 🎉",
      title: "All Done",
      isFixed: true,
    },
  ];

  function handleJoyrideCallback(data) {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false); // tour khatam ya skip → tour band
    }
  }

  return (
    <div className="min-h-screen">
      <Joyride
        steps={steps}
        run={run}
        tooltipComponent={CustomTooltip}
        continuous
        showSkipButton
        styles={{
          options: {
            primaryColor: "#2563eb", // Tailwind blue-600
            zIndex: 10000,
          },
        }}
        callback={handleJoyrideCallback}
      />

      <Navbar onStartTour={() => setRun(true)} />

      <main>
        <Hero />
        <Cards />
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        Built with Vite + React + Tailwind + react-joyride
      </footer>
    </div>
  );
}
