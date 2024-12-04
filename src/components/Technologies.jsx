import Marquee from "react-fast-marquee";

function Technologies() {
  return (
    <>
      <Marquee className="rounded-b-[5rem] bg-[#f2f2f2] pt-[7rem] pb-[4rem]">
        <div>
          <img src="./images/logos/1.png" />
        </div>
        <div>
          <img src="./images/logos/2.png" />
        </div>
        <div>
          <img src="./images/logos/3.png" />
        </div>
      </Marquee>
    </>
  );
}

export default Technologies;
