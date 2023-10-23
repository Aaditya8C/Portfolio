import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import { composeUrl, instaProfile, linkedInProfile, xProfile } from "./linkConstant";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActiveSection("Experience");
  }, [inView]);
  return (
    <div
      className="w-fit md:rounded-t-full bg-gray-100 px-20 md:px-40 py-8"
      ref={ref}
      id="Contact"
    >
      <p className="text-center">Seeking creative partnerships. Let&apos; bring ideas to life!</p>
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
      </div>
    </div>
  );
};

export default Contact;
