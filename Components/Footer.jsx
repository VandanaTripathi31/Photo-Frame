import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#728c70] text-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left py-4 bg-[#5f6354]">
        <div className="flex items-center justify-center space-x-3">
          <img src="/Images/car.png" alt="" className="h-15" />
          <div>
            <h4 className="font-semibold">Next Day Dispatch</h4>
            <p className="text-sm">Fast shipping all over India</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <img src="/Images/c.png" alt="" className="h-15" />{" "}
          <div>
            <h4 className="font-semibold">Unique Designs</h4>
            <p className="text-sm">World-class Quality & Design expereience</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <img src="/Images/return.png" alt="" className="h-15" />{" "}
          <div>
            <h4 className="font-semibold">Friendly Return Policy</h4>
            <p className="text-sm">Customer get Quick return and refund</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <img src="/Images/rs.png" alt="" className="h-15" />{" "}
          <div>
            <h4 className="font-semibold">100% Secure Payment</h4>
            <p className="text-sm">Trusted & Secure Payment</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10 px-6">
        {/* Top Categories */}
        <div>
          <h5 className="font-bold mb-4">TOP CATEGORIES</h5>
          <ul className="space-y-2 text-sm">
            <li>Wooden Frames</li>
            <li>Metal Frames</li>
            <li>Modern Frames</li>
            <li>Antique Frames</li>
            <li>Collage Frames</li>
            <li>Photo Wall Sets</li>
            <li>Customized Frames</li>
            <li>Poster Frames</li>
          </ul>
        </div>

        {/* Further Info */}
        <div>
          <h5 className="font-bold mb-4">FURTHER INFO</h5>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Return and Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        {/* Get Extra Discount */}
        <div>
          <h5 className="font-bold mb-4">GET EXTRA DISCOUNT</h5>
          <p className="text-sm mb-3">Sign up for exclusive updates & offers</p>
          <div className="relative flex items-center bg-white rounded overflow-hidden w-full max-w-md">
            {/* Icon inside input */}
            <span className="absolute left-3 text-gray-500 text-xl">
              <FiMail />
            </span>

            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-10 pr-4 py-2 w-full text-black outline-none"
            />

            {/* Button with arrow icon */}
            <button className=" text-black px-4 py-2 hover:bg-yellow-600 flex items-center justify-center">
              <FiArrowRight className="text-xl" />
            </button>
          </div>

          <div className="flex space-x-4 mt-4 text-xl rounded-2xl ">
            <FaPinterestP className="bg-[#E9E9E9] rounded-[50%] w-[48px] h-[48px] items justify-center p-4 text-[#222] hover:bg-[#5f6354] hover:text-white" />
            <FaFacebookF className="bg-[#E9E9E9] rounded-[50%] w-[48px] h-[48px] items justify-center p-4 text-[#222] hover:bg-[#5f6354] hover:text-white" />
            <FaInstagram className="bg-[#E9E9E9] rounded-[50%] w-[48px] h-[48px] items justify-center p-4 text-[#222] hover:bg-[#5f6354] hover:text-white" />
            <FaYoutube className="bg-[#E9E9E9] rounded-[50%] w-[48px] h-[48px] items justify-center p-4 text-[#222] hover:bg-[#5f6354] hover:text-white" />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-bold mb-4">CONTACT</h5>
          <p className="text-sm flex items-center gap-2">
            <FiMail /> support@framenest.com
          </p>
          <p className="text-sm flex items-center gap-2">
            <FiPhone /> +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bg-[#5f6354] text-center py-4 text-sm">
        © {new Date().getFullYear()} FrameNest. All Rights Reserved.
      </div>
    </footer>
  );
}
