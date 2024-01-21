import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import imageSrc from "../../../public/myImage.jpeg";
import mine from "../../../public/mine.jpeg";
import mie from "../../../public/mie.jpeg";
import { motion } from "framer-motion";
const MyImage: React.FC = () => {
  const convertToUrl = (image: StaticImageData) => {
    return image.src;
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-5 sm:hidden md:hidden"
      >
        <AvatarGroup isBordered max={3} size="lg">
          <Avatar src={convertToUrl(mie)} color="success" />
          <Avatar src={convertToUrl(mine)} color="danger" />
          <Avatar src={convertToUrl(imageSrc)} color="warning" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </motion.div>
      {/* small screen */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:my-5 lg:hidden"
      >
        <AvatarGroup isBordered max={3}>
          <Avatar src={convertToUrl(mie)} color="success" />
          <Avatar src={convertToUrl(mine)} color="danger" />
          <Avatar src={convertToUrl(imageSrc)} color="warning" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </motion.div>
    </div>
  );
};

export default MyImage;
