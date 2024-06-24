const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 py-8 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Orchard-Elegance</h2>
            <p className="text-sm">
              Experience the essence of pure, organic goodness delivered to your
              doorstep!
            </p>
            <ul className="flex list-none mt-5">
              <li className="mr-4">
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-sm block">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm block">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm block">
                  Journal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Help</h2>
            <div className="flex">
              <ul className="list-none mr-4">
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    Shipping Information
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    Returns & Exchange
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
            <div className="text-sm">
              <ul className="list-none">
                <li className="mb-2 flex items-center">
                  <span className="icon icon-map-marker mr-2"></span>
                  <span className="text">
                    Hadapsar, Pune 411028, Maharashtra, India
                  </span>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center">
                    <span className="icon icon-phone mr-2"></span>
                    <span className="text">+91 9766421612</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center">
                    <span className="icon icon-envelope mr-2"></span>
                    <span className="text">info@orchardelegance.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-sm mt-8">
          <p className="text-gray-600">
            Copyright ©{" "}
            <script>document.write(new Date().getFullYear());</script>
            2024 All rights reserved
            <span className="icon-heart color-danger mx-1"></span>
            by{" "}
            <a href="https://colorlib.com" target="_blank">
              Orchard-Elegance
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
