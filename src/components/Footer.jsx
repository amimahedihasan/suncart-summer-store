import Link from "next/link";
import { Card } from "@heroui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10">
      <Card className="rounded-none border-t bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto w-full px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Contact Us
            </h3>
            <p className="text-sm text-gray-600 leading-6">
              Have questions or need support? We are here to help you anytime.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Email: mdmahedi.mpi@gmail.com
            </p>
            <p className="text-sm text-gray-600">
              Phone: +880 1313928111
            </p>
            <p className="text-sm text-gray-600">
              Location: Mymensingh, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Follow Us
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Stay connected with us for latest updates, offers and trends.
            </p>
            <div className="flex gap-4 text-xl text-gray-700">
              <Link href="#">
                <FaFacebook className="hover:text-orange-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link href="#">
                <FaTwitter className="hover:text-orange-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link href="#">
                <FaInstagram className="hover:text-orange-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link href="#">
                <FaLinkedin className="hover:text-orange-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </Link>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Legal
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Your privacy and trust are important to us. Learn more about our policies.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t text-center py-4 text-sm text-gray-500 bg-white">
          <p>
            © {new Date().getFullYear()} SunCart. All rights reserved.
          </p>
          <p className="mt-1">
            Designed for a smooth and modern summer shopping experience.
          </p>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;