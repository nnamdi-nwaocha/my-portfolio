import "./styles.css";
import { Meteors } from "./Meteor";

function Hero() {
  const floatingTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "0.7rem",
    fontWeight: "bold",
    color: "#526d82",
    textShadow: "2px 2px 5px white",
    animation: "float 4s ease-in-out infinite",
  };
  const floatingTextPStyle = {
    padding: "0.4rem 0.8rem",
    backgroundColor: "white",
    transform: "translateX(6rem)",
  };

  return (
    <div className="hero bg-gray-900 max-md:min-h-screen lg:min-h-[100vh] lg:max-h-[4000px] rounded-b-[5rem] relative top-[5rem] z-10 overflow-hidden">
      {/* Meteors */}
      <Meteors number={30} />

      {/* Hero Content */}
      <div className="hero-content text-center relative z-10">
        <div className="max-w-md">
          <img
            src="/images/pfpComp.webp"
            className="max-w-sm mx-auto w-40 h-40 rounded-full object-cover"
            alt="Profile"
          />
          <div className="floating-text">
            <div className="floating-text-p rounded-full">Nnamdi Nwaocha</div>
          </div>
          <h1 className="text-5xl font-bold">Web</h1>
          <h1 className="text-5xl font-bold">Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
