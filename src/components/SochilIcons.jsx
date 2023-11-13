import React from 'react'
import { FaDiscord, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
export default function SochilIcons() {
  return (
    <div>
    <span className="mt-7">FOLLOW US</span>
    <ul className="flex space-x-4 text-4xl mt-2">
      <div className="sochilIcon border border-wahit p-1 rounded-md cursor-pointer ">
        <FaDiscord className="p-2 " />
      </div>
      <div className="sochilIcon border border-wahit p-1 rounded-md cursor-pointer ">
        <FaTwitter className="p-2 " />
      </div>
      <div className="sochilIcon border border-wahit p-1 rounded-md cursor-pointer ">
        <FaInstagram className="p-2 " />
      </div>
      <div className="sochilIcon border border-wahit p-1 rounded-md cursor-pointer ">
        <FaFacebook className="p-2 " />
      </div>
    </ul>
  </div>
  )
}
