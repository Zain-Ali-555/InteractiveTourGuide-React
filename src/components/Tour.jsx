import React from 'react';
import Joyride, { STATUS } from 'react-joyride';

const Tour = ({ isRunning, onTourEnd }) => {
  const steps = [
    {
      target: '[data-tour="navbar"]',
      title: '🚀 Navigation Bar',
      content: 'This is your Navigation Bar — use it to navigate the app and start tours whenever you need guidance.',
      disableBeacon: true,
      placement: 'bottom'
    },
    {
      target: '[data-tour="hero"]',
      title: '✨ Hero Section',
      content: 'Here\'s the Hero section: the main headline and call-to-action. This is where users first understand your value proposition.',
      placement: 'bottom'
    },
    {
      target: '[data-tour="cards"]',
      title: '💼 Feature Cards',
      content: 'These cards highlight your AI Jobs features and services. Each card represents a key benefit for users.',
      placement: 'top'
    },
    {
      target: 'body',
      title: '🎉 Tour Complete!',
      content: 'Congratulations! You now understand the app layout. Feel free to explore and start the tour again anytime.',
      placement: 'center'
    }
  ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      onTourEnd();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={isRunning}
      continuous={true}
      showSkipButton={true}
      showProgress={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#2563eb',
          textColor: '#374151',
          backgroundColor: '#ffffff',
          overlayColor: 'rgba(0, 0, 0, 0.4)',
          arrowColor: '#ffffff',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 12,
          fontSize: 16,
          padding: 20,
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        tooltipTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        tooltipContent: {
          fontSize: 14,
          lineHeight: 1.5,
        },
        buttonNext: {
          backgroundColor: '#2563eb',
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 8,
          padding: '8px 16px',
        },
        buttonBack: {
          color: '#6b7280',
          fontSize: 14,
          fontWeight: 600,
        },
        buttonSkip: {
          color: '#6b7280',
          fontSize: 14,
          fontWeight: 600,
        },
        buttonClose: {
          width: 24,
          height: 24,
          right: 8,
          top: 8,
        },
      }}
      locale={{
        back: 'Previous',
        close: 'Close',
        last: 'Finish',
        next: 'Next',
        skip: 'Skip Tour',
      }}
    />
  );
};

export default Tour;