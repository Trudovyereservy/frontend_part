export interface NewsPost {
    id: number;
    tags: Array<string>;
    images: Array<string>;
    text: string;
    description: string
}

export interface BlogCard {
    title: string;
    subtitle: string;
    shortDescription: string;
    linkUrl: string;
    linkText: string;
    imgUrl: string;
    id: number;
    tags: Array<string>,
}

export interface IFilterProps {
    tags: Array<{ id: number, name: string }>,
    posts: Array<NewsPost | BlogCard>,
    filterPosts: (arg0: Array<NewsPost | BlogCard>) => void;
}