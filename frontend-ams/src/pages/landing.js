import styles from "../app/page.module.css";

export default function Landing() {
    return (
        <div>
            <div className={styles.navbar}>
                <span>Mentor Plus</span>
            </div>
            <div className={styles.landingContent}>
                <div className={styles.mainContent}>
                    <h1>Searching for <span>Best Mentors</span> in your field ?</h1>
                </div>
                <div className={styles.book}>
                    <a href="#">Click here</a> to book your very own mentoring session now.
                </div>
            </div>
        </div>
    )
};