import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaInstagram />, path: "" },
    { icon: <FaLinkedin />, path: "" }
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link href={social.path} key={index} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}

export default Socials;
