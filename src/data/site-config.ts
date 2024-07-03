export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Rabib\'s Blog',
    subtitle: 'Reflections on life',
    description: 'Signposts to freedom and maybe a little extra',
    image: {
        src: '/idea.jpg',
        alt: 'Rabib\'s blog'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: 'https://rabib.xyz'
        }
    ],
    hero: {
        title: 'Home',
        text: "Blog WIP",
        image: {
            src: '/idea.jpg',
            alt: 'Guts'
        },
    },
    postsPerPage: 8
};

export default siteConfig;
