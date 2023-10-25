import Image from "next/image";

interface Props {
  setSteps: (number: number) => void;
  image: string;
  title: string;
}

export function CardEstablishment({ setSteps, image, title }: Props) {
  return (
    <div
      onClick={() => {
        setSteps(2);
      }}
      className="rounded-xl overflow-hidden flex-1 h-full bg-[var(--color-blue)] cursor-pointer hover:scale-105"
    >
      <div className="relative h-40">
        <Image
          src={image}
          className="absolute w-full h-full object-cover z-0"
          alt="imagen tecnicatura superio"
        />
        <div className="bg-[#00000033] absolute w-full h-full z-30"></div>
      </div>
      <div className="z-50 text-white text-base px-3 py-6 flex items-center justify-center font-medium ">
        {title}
      </div>
    </div>
  );
}
