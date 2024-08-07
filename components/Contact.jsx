import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import {
  composeUrl,
  instaProfile,
  leetProfile,
  linkedInProfile,
  xProfile,
} from "./linkConstant";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div
      className=" w-fit md:rounded-t-full bg-cyan-950 text-orange-200 px-20 md:px-40 py-8 "
      id="Contact"
    >
      <p className="text-center text-lg">
        Seeking creative partnerships. Let&apos; bring ideas to life!
      </p>
      <div className="flex md:flex-row flex-wrap justify-center items-center mt-4 gap-6">
        <Link href={composeUrl} target="_blank">
          <Button btnText="Contact me here">
            <FiArrowRight className="h-5 w-5" />
          </Button>
        </Link>
        <Link href={linkedInProfile}>
          <Button invert>
            <FaLinkedin className="h-7 w-5" />
          </Button>
        </Link>
        <Link href={instaProfile}>
          <Button invert>
            <AiFillInstagram className="h-7 w-5" />
          </Button>
        </Link>
        <Link href={xProfile}>
          <Button invert>
            <RiTwitterXLine className="h-7 w-5" />
          </Button>
        </Link>
        <Link href={leetProfile}>
          <Button invert>
            <SiLeetcode className="h-7 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
