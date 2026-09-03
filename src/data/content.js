import {
  Globe, Settings, TrendingUp, Palette, Code, Search,
  Users, Award, Lightbulb,
  Target, HeadphonesIcon, RefreshCw, Star
} from 'lucide-react'

export const brand = {
  name: 'Maven Marketing Group',
  shortName: 'Maven',
  tagline: 'Custom Built Websites',
  subtitle: 'We Build Websites With A Purpose',
  founded: 2019,
  phone: '(847) 558-9957',
  email: 'info@mavenmarketinggroup.com',
  address: {
    street: '715 Ela Rd.',
    city: 'Lake Zurich',
    state: 'IL',
    zip: '60047',
  },
  social: {
    instagram: 'https://www.instagram.com/mavenmg/',
    facebook: 'https://www.facebook.com/mavenmg',
    twitter: 'https://twitter.com/mavenmg',
    linkedin: 'https://www.linkedin.com/company/mavenmg/',
  },
}

export const stats = [
  { value: 500, prefix: '$', suffix: 'M+', label: 'Revenue Generated', description: 'We have driven more than $500 million in revenue for our clients through effective website management and digital marketing strategies.' },
  { value: 3.6, suffix: 'M+', label: 'Leads Generated', description: 'Thousands of qualified leads delivered to businesses through our data-driven SEO and PPC campaigns.' },
  { value: 300, suffix: '+', label: 'Businesses Helped', description: 'From startups to established enterprises, we have helped businesses across the US and the world grow.' },
]

export const services = [
  {
    id: 'web-design',
    icon: Globe,
    title: 'Custom Website Solutions',
    features: ['Custom Web Design', 'Custom Web Development', 'Website Redesign', 'Ecommerce'],
    description: 'Whether you need a personal website designer or an enterprise-level website — Maven Marketing Group will provide affordable web design services that fit your businesses needs!',
    longDescription: 'Maven Marketing Group will design a responsive custom website that will fit all your business needs.',
    highlights: ['Responsive on all devices', 'Custom designed', 'E-commerce Capabilities'],
  },
  {
    id: 'management',
    icon: Settings,
    title: 'Website Management',
    features: ['Web Maintenance', 'Dedicated Management', 'Content Strategy', 'Rebrand'],
    description: 'Maven Marketing Group offers website management services to ensure your website is up and running smoothly.',
    longDescription: 'We offer website management services to ensure your website is up and running with a 99.9% up-time guarantee.',
    highlights: ['Website monitoring', 'Website core updates', 'Website plugin updates', 'Routine content updates'],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimization',
    features: ['SEO', 'Conversion Rate Optimization', 'Lead Generation'],
    description: 'Maven Marketing Group provides digital marketing services to companies all over the world who are needing to generate more inbound traffic to their websites.',
    longDescription: 'Our SEO strategies help your business rank higher on search engines and drive qualified traffic.',
    highlights: ['On-page SEO', 'Technical SEO', 'Link building', 'Analytics & reporting'],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    features: ['PPC/Google Ads', 'Social Media Marketing', 'Content Marketing', 'Logo Design'],
    description: 'Maven Marketing Group offers a number of freelance digital marketing solutions that will fulfill any of your business needs.',
    longDescription: 'Companies all around the world use our freelance digital marketing services to generate leads, land new clients, & increase sales!',
    highlights: ['Logo Design', 'Social Media Marketing', 'Google Ads', 'SEO', 'Lead Generation'],
  },
]

export const portfolio = [
  { id: 1, name: 'HAQ Pickleball', category: 'E-Commerce', services: 'Website Design, Website Development, Website Management', color: '#E85D04', featured: true, image: '/images/p1.jpg', blurb: 'Started as a fun idea between a father and son, now a booming e-commerce brand.' },
  { id: 2, name: 'Pirtano Construction', category: 'Construction & Real Estate', services: 'Website Design, Website Development, Website Management', color: '#2D6A4F', image: '/images/p2.jpg', blurb: 'Showcasing featured projects with sharp townhome infrastructure craftsmanship.' },
  { id: 3, name: 'LSC Development', category: 'Construction & Real Estate', services: 'Website Design, Website Development, Website Management', color: '#1A1A2E', image: '/images/p3.jpg', blurb: 'A functional, easy-to-update site for communicating modern developments.' },
  { id: 4, name: 'CRX Engines', category: 'Manufacturing', services: 'Website Design, Website Development', color: '#3B82F6', image: '/images/p4.jpg', blurb: 'A tough, performance-focused site for an engine manufacturing brand.' },
  { id: 5, name: 'Simpson Cleaning', category: 'Manufacturing', services: 'Website Design, Website Development, Website Management', color: '#0D7377', image: '/images/p5.jpg', blurb: 'Swooped in to save the brand with a tough, slick, all-American redesign.' },
  { id: 6, name: 'GXC Inc', category: 'Other', services: 'Website Design, Website Development, Website Management', color: '#7B2CBF', image: '/images/p6.jpg', blurb: 'A custom web presence built to convert visitors into customers.' },
  { id: 7, name: 'TorHoerman Law', category: 'Law Firms', services: 'Website Design, Website Development, Website Management', color: '#C77DFF', image: '/images/p1.jpg', blurb: 'A professionalized site that cemented a top-tier presence in the industry.' },
  { id: 8, name: 'Waggon', category: 'Other', services: 'Website Design, Website Development, Website Management, Digital Marketing', color: '#E85D04', image: '/images/p2.jpg', blurb: 'A bespoke site with full digital marketing to match standout branding.' },
  { id: 9, name: 'Kieth Law Group', category: 'Law Firms', services: 'Website Design, Website Development, Website Management', color: '#612C8B', image: '/images/p3.jpg', blurb: 'Clean, trust-building design with ongoing management and maintenance.' },
  { id: 10, name: 'Crypto Cache', category: 'E-Commerce', services: 'Website Design, Website Development, Website Management', color: '#FAA307', image: '/images/p4.jpg', blurb: 'A bold, cutting-edge crypto-savvy design with flawless management.' },
  { id: 11, name: 'Blueberry', category: 'Other', services: 'Website Design, Website Development, Website Management', color: '#4A1F6B', image: '/images/p5.jpg', blurb: 'A sleek, futuristic DeFi experience that pulls the brand onto the screen.' },
]

export const categories = ['All', 'Construction & Real Estate', 'E-Commerce', 'Law Firms', 'Manufacturing', 'Other']

export const testimonials = [
  { name: 'Slater Heil', role: 'Founder & CEO', company: 'Blueberry', text: 'When we at Blueberry needed a site to match our next-gen DeFi vision, Maven delivered something unreal. Their design is unmatched in this cutting-edge space—sleek, futuristic, and screaming innovation, it\'s like they pulled our protocol\'s soul straight onto the screen.' },
  { name: 'Edric Bol', role: 'Owner', company: 'Bolco Construction', text: 'Maven stepped up and delivered exactly what I wanted: simple and effective. They built a clean, no-nonsense site that puts our work front and center with great photos, easy navigation, and a straightforward layout that doesn\'t confuse anyone.' },
  { name: 'Mike Wall', role: 'Owner', company: 'Simpson Cleaning', text: 'Before maven we were on BigCommerce — high fees eating us alive. Maven swooped in, got us off that mess, and saved us a ton on monthly costs. The site they built? Tough, slick, and all-American, just like our breachers.' },
  { name: 'Jason Collicot', role: 'Owner', company: 'Crypto Cache', text: 'Maven\'s management of our Crypto Cache website has been phenomenal. They\'ve transformed it with a bold, cutting-edge design — sharp visuals, seamless flow, and a crypto-savvy vibe that grabs attention.' },
  { name: 'Quam Opere', role: 'Owner', company: 'Eminent Limo', text: 'Eminent Limo was stuck at zero, nothing coming through the website, until Maven turned it around. They shot us from $0 to averaging $50K a month, knocking out every competitor in search rankings. Maven\'s design and SEO magic are unreal.' },
  { name: 'John Skalla', role: 'Owner', company: '', text: 'If Maven Marketing Group was an NHL team they would be the Stanley Cup Champions. They shoot and always score. I wouldn\'t let anyone else touch my websites. The best.' },
  { name: 'Genaro Cavazos', role: 'Chief Executive Officer', company: '', text: 'Connor and his team were absolutely fantastic. They professionalized our website and have helped us cement ourselves as a top-notch provider in the Security Industry. I wish I had found them sooner!' },
  { name: 'Jim Hack', role: 'Owner', company: 'Haq Pickleball', text: 'Running Haq Pickle, I needed a site that screams our bold vibe and Maven delivered big time. The checkout? Smooth, and lightning-fast. It\'s not just a website; it\'s Haq Pickle to a T.' },
  { name: 'Jean Jodoin', role: 'Partner', company: 'LSC Development', text: 'Maven Marketing Group gave us exactly what we asked for; A functional site that we could use to communicate. We have had zero issues updating the site after launch and could not be more happy.' },
  { name: 'Mike Piraino', role: 'Owner', company: 'PirTano Construction', text: 'At PirTano Construction, we take pride in our work, and Maven\'s design of our featured projects on our website has been a big win for us. Maven keeps the site clean, updated, and easy to navigate.' },
  { name: 'Gus Alexander', role: 'Owner', company: 'Simpson Pressure Washers', text: 'Our site needed help, outdated, and a mess for our brand. Maven swooped in and saved it with their top-notch maintenance and management services. Now it\'s smooth, fast, and easy to use.' },
  { name: 'Robert Rajfer', role: 'Founder & CEO', company: '', text: 'Their website is not only visually stunning but also incredibly user-friendly, making navigation a breeze. Their marketing strategies are unparalleled, driving tangible results and elevating my online presence beyond expectations.' },
]

export const reasons = [
  { icon: Code, title: 'Custom Website Solutions', description: 'We understand that every business is unique. We craft tailor-made web design and marketing strategies that align perfectly with your specific business goals and brand identity.' },
  { icon: Award, title: 'Expertise and Experience', description: 'With years of experience in web development and digital marketing, Maven has a deep understanding of the digital landscape. Our team is proficient in the latest technologies and trends.' },
  { icon: Target, title: 'Results-Driven Approach', description: 'Our focus is on delivering measurable results & increasing your bottom line. We utilize data-driven strategies to ensure that every marketing dollar you spend contributes to achieving your business objectives.' },
  { icon: HeadphonesIcon, title: 'Exceptional Customer Service', description: 'We pride ourselves on providing exceptional service with clear communication, regular updates, and ongoing support to ensure your needs are met and exceeded.' },
  { icon: RefreshCw, title: 'Ongoing Management and Maintenance', description: 'We believe that our job doesn\'t end with the launch of your website. Maven provides continuous support and maintenance to ensure your site stays updated.' },
  { icon: Lightbulb, title: 'Innovative and Creative Design', description: 'Our designs are not just functional but also aesthetically pleasing, aligning with the latest design standards to create engaging, user-friendly websites that stand out.' },
  { icon: Star, title: 'Commitment to Excellence', description: 'Every project at Maven is handled with the utmost care and attention to detail, ensuring high-quality outcomes. We pride ourselves on exceeding client expectations.' },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const vision = {
  title: 'The Best Web Design & Digital Marketing Agency',
  body: 'At Maven, we provide premier website design and marketing services. As a leading website management and digital marketing agency, our expertise covers website management, conversion rate optimization, SEO, and UI/UX design — offering a comprehensive approach that consistently delivers results.',
  callout: 'We excel in crafting custom websites and marketing strategies that truly connect with your audience.',
}

export const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Staying ahead of the curve with the latest technologies and design trends.' },
  { icon: Target, title: 'Results', description: 'Every decision is made with your bottom line in mind.' },
  { icon: Users, title: 'Partnership', description: 'We treat our clients like partners, not just numbers.' },
  { icon: Star, title: 'Excellence', description: "We never settle for \"good enough\" — we strive for outstanding." },
]

export const team = {
  title: 'Elite Team of Online Marketers & Web Masters',
  subtitle: 'Elevating Digital Excellence: Meet the Marketing Mavens',
  intro: 'At Maven, we bring together the finest minds in digital strategy and web design — our team known as the Marketing Mavens. These elite online marketers and web masters are your gateway to transcending the ordinary and achieving the extraordinary in the digital realm.',
  webMasters: {
    title: 'Our Web Masters',
    body: 'Commanding the latest in technology and design trends, our web masters don\'t just build websites; they craft powerhouse platforms that are optimized for SEO and designed to convert visitors into customers, setting the stage for sustainable business growth.',
  },
  marketers: {
    title: 'Our Online Marketers',
    body: 'With precision, our online marketers devise and execute bespoke digital marketing campaigns. Utilizing a mix of SEO, content marketing, and targeted social media strategies, they ensure that your brand doesn\'t just participate but dominates in your industry.',
  },
  callout: 'Join forces with the Marketing Mavens, where every click is an opportunity, and every strategy is tailored for your triumph.',
}

export const packages = [
  {
    icon: Palette,
    name: 'Web Design Packages',
    blurb: 'Custom-built, responsive websites designed to convert.',
    features: ['Responsive design', 'Custom-designed websites', 'E-commerce capabilities', 'Custom web development', 'Website redesign'],
    color: '#612C8B',
  },
  {
    icon: Settings,
    name: 'Website Management Services',
    blurb: 'Keep your site fast, secure, and always up to date.',
    features: ['99.9% uptime guarantee', 'Continuous monitoring', 'Regular updates', 'Content updates', 'Dedicated management', 'Content strategy', 'Rebrand'],
    color: '#8B4FBF',
  },
  {
    icon: TrendingUp,
    name: 'Digital Marketing Services',
    blurb: 'Data-driven campaigns that grow your leads and sales.',
    features: ['Logo design', 'Social media marketing', 'Google Ads / PPC', 'SEO', 'Lead generation', 'Conversion rate optimization', 'Content marketing'],
    color: '#DACAFF',
  },
]
