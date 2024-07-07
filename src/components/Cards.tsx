import React, { useState } from 'react';
import Card from './ZoomCard';
import Kapable from "../assets/Kapable.png";
import Rider from "../assets/Rider.png";
import MyLar from "../assets/MyLar.png";
import Typography from "../assets/Typography.png";
import MailScape from "../assets/MailScape.png";
import Social from "../assets/SocialMediaApp.png";

interface CardData {
    title: string;
    image: string;
    link: string;
    category: string;
}

const cardsData: CardData[] = [
    { title: 'Branding & Logo Design', image: Kapable, link: 'https://www.behance.net/gallery/151375765/Kapable-Logo-Design', category: 'Branding' },
    { title: 'UI/UX - Rider App', image: Rider, link: 'https://www.behance.net/gallery/127419845/Rider-UIUX-Project', category: 'UI/UX' },
    { title: 'Logo Design', image: MyLar, link: 'https://www.behance.net/gallery/116686631/MYLAR-PACKAGING-SOLUTIONS-PVT-LTD', category: 'Branding' },
    { title: 'Typography', image: Typography, link: 'https://www.behance.net/gallery/105377499/Typeface-Poster-Design', category: 'Graphic Design' },
    { title: 'UI/UX - Mail Scape', image: MailScape, link: 'https://www.behance.net/gallery/116828259/Mailscape-Email-App', category: 'UI/UX' },
    { title: 'Social Media App', image: Social, link: 'https://www.behance.net/gallery/112139341/Creative-Poster-Design', category: 'Graphic Design' },
];

const CardComponent: React.FC = () => {
    const [filter, setFilter] = useState<string>('All');

    const handleFilterChange = (category: string) => {
        setFilter(category);
    };

    const getFilteredCards = () => {
        if (filter === 'All') {
            return cardsData;
        }
        return cardsData.filter(card => card.category === filter);
    };

    const sortedCards = getFilteredCards().sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="container mx-auto mb">
            <div className="flex justify-start space-x-5 pb-[16px]">
                <button onClick={() => handleFilterChange('All')} className={`rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary ${filter === 'All' ? 'bg-secondary' : ''}`}>All</button>
                <button onClick={() => handleFilterChange('UI/UX')} className={`rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary ${filter === 'UI/UX' ? 'bg-secondary' : ''}`}>UI/UX</button>
                <button onClick={() => handleFilterChange('Graphic Design')} className={`rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary ${filter === 'Graphic Design' ? 'bg-secondary' : ''}`}>Graphic Design</button>
                <button onClick={() => handleFilterChange('Branding')} className={`rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary ${filter === 'Branding' ? 'bg-secondary' : ''}`}>Branding</button>
                <button onClick={() => handleFilterChange('Archive')} className={`rounded-[32px] px-[44px] hover:shadow-sm py-1 border hover:bg-secondary text-primary ${filter === 'Archive' ? 'bg-secondary' : ''}`}>Archive</button>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-[125px]">
                {sortedCards.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} link={card.link} />
                ))}
            </div>
        </div>
    );
}

export default CardComponent;
