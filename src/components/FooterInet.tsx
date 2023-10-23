import logoInet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function FooterInet() {
  return (
    <footer className="h-24 bg-[var(--color-blue)]">
      <div className="mx-auto max-w-5xl flex justify-between px-5 h-full">
        <Image className="w-48 object-contain" src={logoInet} alt="logo inet" />
        <Image
          className="w-48 object-contain hidden sm:flex "
          src={logoMinisterio}
          alt="logo ministerio"
        />
      </div>
    </footer>
  );
}
