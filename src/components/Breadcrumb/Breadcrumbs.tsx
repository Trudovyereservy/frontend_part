import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

import { IBreadcrumbs } from './Breadcrumbs.props';

const RouteToLabelMap = {
    blog: "Блог",
    coachs: "Тренерский состав",
    news: "Новости",
    contacts: "Контакты"
}

const Breadcrumbs: FC<IBreadcrumbs> = () => {
    const pathname = usePathname()
    const segments = pathname.split("/");
    segments.shift()

    console.log(pathname);
    console.log(segments);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Главная</Link>
                </li>
                {
                    segments.map(segment =>
                        <li>{RouteToLabelMap[segment]}</li>
                    )
                }
            </ul>
        </nav>
    )
};

export default Breadcrumbs;