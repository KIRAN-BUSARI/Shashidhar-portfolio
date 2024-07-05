import React from 'react';

interface SocialMediaLink {
    platform: string;
    url: string;
    icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        platform: 'Behance',
        url: 'https://www.behance.net/shashidharby',
        icon: 'fab fa-behance',
    },
    {
        platform: 'Instagram',
        url: 'https://www.instagram.com/shashidharby.design/',
        icon: 'fab fa-instagram',
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/shashidharby/',
        icon: 'fab fa-linkedin-in',
    },
];

const SocialMedia: React.FC = () => {
    return (
        <div className="flex justify-center">
            {/* <div className="text-[#1B1B1E] font-normal text-lg">
                Contact
            </div> */}
            <div className="md:flex-col flex space-x-4">
                {socialMediaLinks.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#FFCC33] transition duration-300"
                        aria-label={social.platform}
                    >
                        <i className={`${social.icon} text-2xl`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
