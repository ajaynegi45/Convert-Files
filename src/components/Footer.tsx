import styles from "./footer.module.css"
import Link from "next/link";

export default function Footer() {


    return (
        <footer className={styles["footer-container"]}>

            <div className={styles["newsletter-container"]}>
                <div className={styles["newsletter-left-container"]}>
                    <h3>Join to Receive Updates</h3>
                    <p>Get updates on new game additions straight to your inbox.</p>
                </div>
                <div className={styles["newsletter-right-container"]}>

                    <div className={styles["newsletter-email-container"]}>
                        <form action="" >
                            <input id={"email-input"} type="email" placeholder="Enter Your email" required={true} disabled={true}/>
                            <p>Subscribe</p>
                        </form>
                    </div>
                    <div><p>Your privacy is important. I never share your email.</p></div>

                </div>
            </div>

            <div className={styles["footer"]}>
                <div className={styles["footer-left-container"]}>
                    {/*<h2>Uttarakhand Culture </h2>*/}
                    <h2>CONVERT FILES</h2>
                    <p>Fast and secure file converter that transforms any file type into compatible formats directly on your device.</p>
                </div>

                <div className={styles["footer-right-container"]}>
                    <div className={styles["footer-right-link-container"]} >
                        <p>Play Game</p>
                        <Link href={"https://www.linkedin.com/in/ajaynegi45/"}>LinkedIn</Link>
                        <Link href={"https://github.com/ajaynegi45/Convert-Files"}>Github</Link>
                        <Link href={"https://ukculture.netlify.app/contact"}>Contact us</Link>
                    </div>
                    <div className={styles["footer-right-link-container"]} >
                        <p>Contribution</p>
                        <Link href={"https://github.com/ajaynegi45/Convert-Files/issues"}>Issues</Link>
                        <Link href={"https://github.com/ajaynegi45/Convert-Files/blob/main/README.md"}>About us</Link>
                        <Link href={"https://github.com/ajaynegi45/Convert-Files"}>Contribution</Link>
                    </div>
                </div>
            </div>

            <div className={styles["copyright-container"]}>
                <p> <span className={styles.copyright}>© </span>2024 Old School Game. All rights reserved.</p>
            </div>
        </footer>
    );
}
