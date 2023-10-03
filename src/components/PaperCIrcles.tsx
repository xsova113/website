import Image from "next/image";
import PaperCircle from "./PaperCircle";

const PaperCIrcles = () => {
  return (
    <div className="flex gap-x-14 justify-center -z-40 relative -top-[106px] overflow-x-clip">
      <Image
        src={"/top-brush.svg"}
        alt={"top-brush"}
        width={350}
        height={300}
        className="absolute left-[30%] md:left-[40%]"
      />
      {Array(20)
        .fill(0)
        .map((_i, index) => (
          <PaperCircle key={index} />
        ))}
    </div>
  );
};

export default PaperCIrcles;