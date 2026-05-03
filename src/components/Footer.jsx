
import Link from "next/link";
import { Card } from "@heroui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10">
      <Card className="rounded-none border-t">
        <div className="max-w-7xl mx-auto w-full px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 🔻 Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Contact Us
            </h3>
            <p className="text-sm text-gray-600">
              Email: support@sunnycart.com
            </p>
            <p className="text-sm text-gray-600">
              Phone: +880 1234-567890
            </p>
            <p className="text-sm text-gray-600">
              Location: Dhaka, Bangladesh
            </p>
          </div>

          {/* 🔻 Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Follow Us
            </h3>
            <div className="flex gap-4 text-xl text-gray-700">
              <Link href="#">
                <FaFacebook className="hover:text-orange-500 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* 🔻 Privacy Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">
              Legal
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} SunnyCart. All rights reserved.
        </div>
      </Card>
    </footer>
  );
};

export default Footer;