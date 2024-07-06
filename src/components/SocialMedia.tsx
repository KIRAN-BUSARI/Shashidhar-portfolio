import React, { CSSProperties, MouseEvent } from 'react';

interface SocialMediaLink {
    platform: string;
    url: string;
    icon: string;
}

interface HoverColors {
    [platform: string]: string;
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

const hoverColors: HoverColors = {
    Behance: '#1769ff',
    Instagram: '#E4405F',
    LinkedIn: '#0A66C2',
};

const SocialMedia: React.FC = () => {
    // Type definition for event handler
    const handleMouseEnter = (platform: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        (e.currentTarget.style as CSSProperties).color = hoverColors[platform];
    };

    const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
        (e.currentTarget.style as CSSProperties).color = '';
    };

    return (
        <div className="flex justify-center mb-4">
            <div className="flex space-x-4">
                {socialMediaLinks.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition duration-300"
                        aria-label={social.platform}
                        style={{
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={handleMouseEnter(social.platform)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className={`${social.icon} text-2xl`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
