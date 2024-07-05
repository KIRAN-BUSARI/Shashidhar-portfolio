import Card from './ZoomCard';
import Kapable from "../assets/Kapable.png";
import Rider from "../assets/Rider.png";
import MyLar from "../assets/MyLar.png";
import Typography from "../assets/Typography.png";
import MailScape from "../assets/MailScape.png";
import Social from "../assets/SocialMediaApp.png";

export default function CardComponent() {
    return (
        <div className="container mx-auto py-8">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <Card title='Branding & Logo Design' image={Kapable} link="https://www.behance.net/gallery/151375765/Kapable-Logo-Design" />
                <Card title='UI/UX - Rider App' image={Rider} link='https://www.behance.net/gallery/127419845/Rider-UIUX-Project' />
                <Card title='Logo Design' image={MyLar} link='https://www.behance.net/gallery/116686631/MYLAR-PACKAGING-SOLUTIONS-PVT-LTD' />
                <Card title='Typography' image={Typography} link='https://www.behance.net/gallery/105377499/Typeface-Poster-Design' />
                <Card title='UI/UX - Mail Scape' image={MailScape} link='https://www.behance.net/gallery/116828259/Mailscape-Email-App' />
                <Card title='Social Media App' image={Social} link='https://www.behance.net/gallery/112139341/Creative-Poster-Design' />
            </div>
        </div>
    );
}
