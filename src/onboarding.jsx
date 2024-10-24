import React from "react";
import "./App.css";


const Onboarding = ({ onClose }) => {
  // const onboardingSteps = [
  //   {
  //     title: "Velkommen til Lendly",
  //     image: "/path/to/image1.png",
  //     text: "Del dine værktøjer og gør hverdagen nemmere for dig selv og andre.",
  //   },
  //   {
  //     title: "Find det du mangler",
  //     image: "/path/to/image2.png",
  //     text: "Brug Lendly til at finde værktøj og udstyr i dit lokalområde.",
  //   },
  //   {
  //     title: "Lån og Del",
  //     image: "/path/to/image3.png",
  //     text: "Del dine egne ting og tjen lidt ekstra, mens du hjælper andre.",
  //   },
  // ];

  // return (
  //   <div className="onboarding-container">
  //     <img
  //       src={''}
  //       alt="Close"
  //       className="close-icon"
  //       onClick={onClose}
  //     />

  //     <Swiper spaceBetween={30} pagination={{ clickable: true }}>
  //       {onboardingSteps.map((step, index) => (
  //         <SwiperSlide key={index}>
  //           <div className="onboarding-slide">
  //             <h2>{step.title}</h2>
  //             <img
  //               src={step.image}
  //               alt={`Step ${index + 1}`}
  //               className="onboarding-image"
  //             />
  //             <p>{step.text}</p>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>

  //     <div className="pagination-dots">
  //       {/* Swiper pagination generates dots automatically */}
  //     </div>
  //   </div>
  // );

  return <>Hej</>
};

export default Onboarding;

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      {showOnboarding && <Onboarding onClose={handleCloseOnboarding} />}
      {/* Resten af appen */}
    </>
  );
};
