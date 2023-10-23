import Link from "next/link";
import logoInet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function HeaderInet() {
  return (
    <header className="h-[15vh] bg-[var(--color-blue)]">
      <div className="mx-auto max-w-5xl flex justify-between px-5 h-full">
        <Link href="/" className="cursor-pointer flex justify-center">
          <Image
            className="w-48 object-contain"
            src={logoInet}
            alt="logo inet"
          />
        </Link>
        <Image
          className="w-48 object-contain hidden sm:flex "
          src={logoMinisterio}
          alt="logo ministerio"
        />
      </div>
    </header>
  );
}
