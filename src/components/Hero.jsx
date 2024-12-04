import "./styles.css";

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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src="/images/pfpComp.webp"
            className="max-w-sm mx-auto w-40 h-40 rounded-full object-cover"
          />
          <div className="floating-text">
            <div className="floating-text-p rounded-full">Nnamdi Nwaocha</div>
          </div>
          <h1 className="text-5xl font-bold">Web</h1>
          <h1 className="text-5xl font-bold">Developer</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
