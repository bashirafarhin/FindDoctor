import React from "react";
import {
  MessageSquareText,
  ShoppingCart,
  BookmarkPlus,
  FlaskConical,
  BookOpenText,
} from "lucide-react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="w-full bg-blue-800 flex flex-col sm:flex-row justify-center flex-wrap p-4">
      <FooterItem icon={MessageSquareText} label="Consult With a Doctor" />
      <FooterItem icon={ShoppingCart} label="Order Medicines" />
      <FooterItem icon={BookmarkPlus} label="View Medical Records" />
      <FooterItem icon={FlaskConical} label="Book Tests" showNewButton />
      <FooterItem icon={BookOpenText} label="Read Articles" />
      <FooterItem icon={BookOpenText} label="For Healthcare Services" />
    </div>
  );
};
export default Footer;
