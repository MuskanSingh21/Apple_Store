import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div>
      <Navbar>
        <div>
          <FaApple />
        </div>
        <div>Store</div>
        <div>Mac</div>
        <div>ipad</div>
        <div>iphone</div>
        <div>Watch</div>
        <div>AirPods</div>
        <div>TV & Home</div>
        <div>Entertainment</div>
        <div>Accessories</div>
        <div>Support</div>
        <div>
          <IoIosSearch />
        </div>
        <div>
          <IoBagOutline />
        </div>
      </Navbar>
      <div>
        <span>
          Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant
          cashback‡ on selected products with eligible cards.{" "}
          <a>
            Shop <LiaGreaterThanSolid />
          </a>
        </span> 
      </div>
    </div>
  );
};

export default Navbar;
