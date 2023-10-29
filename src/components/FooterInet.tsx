import logoInet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function FooterInet() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative border-t border-gray-900/10"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <Image className="h-7" src={logoInet} alt="Company name" />
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Solutions
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Chat bots
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Calls
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Video calls
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Chats
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Support
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
