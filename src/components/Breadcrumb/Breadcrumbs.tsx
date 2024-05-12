import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IBreadcrumbs } from './Breadcrumbs.props';

import styles from './Breadcrumbs.module.scss';

interface RouteToLabel {
    blog: string;
    coachs: string;
    news: string;
    contacts: string;
}

const RouteToLabelMap: RouteToLabel = {
    blog: "Блог",
    coachs: "Тренерский состав",
    news: "Новости",
    contacts: "Контакты"
}

const getLinks = (segments: Array<string>) => {
    const links = segments.reduce((acc: Array<string>, cur, curIndex) => {
        const last: string = curIndex > 0 ? acc[curIndex - 1] : "";
        const newPath: string = last + "/" + cur;
        acc.push(newPath);
        return acc;
    }, []);
    return links;
}

const Breadcrumbs: FC<IBreadcrumbs> = () => {
    const pathname = usePathname();
    const segments: Array<string> = pathname.split("/");
    segments.shift()
    const segmentsLinks = getLinks(segments);

    const crumbs = segments.map((segment, index) => {
        const crumb = {
            id: index,
            href: segmentsLinks[index],
            label: RouteToLabelMap[segment as keyof RouteToLabel],
        };
        return crumb;
    })

    return (
        <nav className={styles.breadcrumbs}>
            <ul className={styles.breadcrumbs__list}>
                <li className={styles.breadcrumbs__listItem}>
                    <Link href="/">Главная</Link>
                </li>
                {
                    crumbs.map((segment) =>
                        <li key={segment.id} className={styles.breadcrumbs__listItem}>
                            <p className={styles.breadcrumbs__separator}></p>
                            <Link className={pathname === segment.href ? styles.breadcrumbs__activeLink : ""} href={segment.href}>{segment.label}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
};

export default Breadcrumbs;
