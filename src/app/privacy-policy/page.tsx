import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../components/PolicyPage/PolicyPage.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <main className={`light-theme ${styles.pageWrapper}`}>
      <Navbar isStatic />

      <div className={styles.contentContainer}>
        <article className={styles.policyCard}>
          <header className={styles.header}>
            <span className={styles.badge}>Legal & Transparency</span>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last Updated: October 2026</p>
          </header>

          <div className={styles.intro}>
            <p>
              Hadron Global Business Solutions (“we,” “us,” “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.hadrongbs.com" className={styles.policyLink} target="_blank" rel="noopener noreferrer">https://www.hadrongbs.com</a>, use our services, or interact with us in other ways. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.paragraph}>
              <strong className={styles.subLabel}>Personal Information:</strong> We may collect personal information such as your name, telephone number, email address, date of birth, home or business address, and mailing address when you access certain areas of our website that require registration for certain services or if you request more information about those services.
            </p>
            <p className={styles.paragraph}>
              <strong className={styles.subLabel}>Device Information:</strong> When you use our services via custom applications (apps), we may collect device-specific information such as your device model, operating system, unique device identifiers, and mobile network information. We may associate your unique device identifier or phone number with information you have used to register for certain services or purchase products.
            </p>
            <p className={styles.paragraph}>
              <strong className={styles.subLabel}>Specialized Information:</strong> We may collect and store information locally on your device using mechanisms such as browser web storage (including HTML 5) and application data caches. Certain services may include a unique application number in connection with app installation. This number and information, including the operating system type and app version number, may be sent to our service providers when you install, update, or uninstall apps. We may also collect and process information about your actual location.
            </p>
            <p className={styles.paragraph}>
              <strong className={styles.subLabel}>Non-Personal Information:</strong> We may collect information that cannot be used to identify you. For example, we may aggregate non-personal information about you and other customers who visit our site. Aggregated information will not contain any information that can be linked directly back to you.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Collect Information</h2>
            <p className={styles.paragraph}>
              We may use tools to collect information about you, your computer access points, mobile devices, and the web browser you use to connect to our site. For example, “cookies” are tiny text files that may be placed on your computer or mobile device when you visit our site. We may use cookies to personalize your interactions with our site. You do not have to accept our cookies, and you may set your browser to restrict their use and delete them after they have been placed on your computer or mobile devices. If you do not accept or delete our cookies, some areas of our site may take more time to work or may not function properly.
            </p>
            <p className={styles.paragraph}>
              We may also collect additional information from your web browser each time you visit our site. This information may include your IP address, the type of browser, the time that your browser was used to access our site, and the referring website’s address.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Use of Your Information</h2>
            <p className={styles.paragraph}>We may use your personal information to:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Provide, operate, and maintain our website and services.</li>
              <li className={styles.listItem}>Improve, personalize, and expand our website and services.</li>
              <li className={styles.listItem}>Understand and analyze how you use our website and services.</li>
              <li className={styles.listItem}>Develop new products, services, features, and functionality.</li>
              <li className={styles.listItem}>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
              <li className={styles.listItem}>Process your transactions and manage your orders.</li>
              <li className={styles.listItem}>Send you emails.</li>
              <li className={styles.listItem}>Find and prevent fraud.</li>
              <li className={styles.listItem}>Log files.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Disclosure of Your Information</h2>
            <p className={styles.paragraph}>We may share your personal information with:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Service providers who perform services on our behalf.</li>
              <li className={styles.listItem}>Our affiliates.</li>
              <li className={styles.listItem}>Business partners.</li>
              <li className={styles.listItem}>Other users (if you post information publicly on our website).</li>
              <li className={styles.listItem}>Law enforcement or other government agencies as required by law.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Storage and Security</h2>
            <p className={styles.paragraph}>
              We use reasonable efforts to ensure that our Internet service providers have implemented physical, electronic, and procedural security measures to assist with safeguarding your personal information and to help protect against unauthorized access and disclosure. However, the Internet has inherent security risks, and we cannot promise that your personal information, personal searches, and other communications will always remain secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Children’s Privacy</h2>
            <p className={styles.paragraph}>
              Our website is a general audience site and is not directed toward children under the age of majority. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information without parental consent, that information will be deleted from our databases.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Choices</h2>
            <p className={styles.paragraph}>
              You can opt out of receiving marketing communications from us by following the unsubscribe instructions included in our marketing communications or by contacting us directly. You may also update or correct your personal information by contacting us.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Changes to This Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className={styles.contactBox}>
              <p className={styles.contactName}>Hadron Global Business Solutions</p>
              <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                Email: <a href="mailto:info@hadrongbs.com" className={styles.contactEmail}>info@hadrongbs.com</a>
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
