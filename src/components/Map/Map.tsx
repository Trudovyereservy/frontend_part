import styles from "./map.module.scss";

const Map = () => {
    return (
        <article className={styles.map}>
            <iframe className={styles.map__iframe}
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5243.777535600031!2d84.95279509583223!3d56.4550656715688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326930663988a61%3A0x625888d6ddb09c8f!2z0JvQsNCz0LXRgNC90YvQuSDRgdCw0LQ!5e0!3m2!1sru!2sru!4v1711997832088!5m2!1sru!2sru"
            loading="lazy" ></iframe>
        </article>
    );
};

export { Map };