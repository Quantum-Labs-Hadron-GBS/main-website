import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Events.module.css";
import RegistrationForm from "./RegistrationForm";
import { SALESFORCE_AGENTIC_ITSM as event } from "./data";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page intro */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Resources · Events</p>
            <h1 className={styles.pageTitle}>Events</h1>
            <p className={styles.pageLead}>
              Executive roundtables and working sessions where enterprise technology leaders compare notes on platforms,
              AI and service operations.
            </p>
          </div>
        </section>

        {/* Featured event banner */}
        <section className={styles.container} aria-labelledby="event-title">
          <div className={styles.banner}>
            <p className={styles.bannerKicker}>
              <span>{event.partner}</span>
              <span className={styles.sep} aria-hidden="true">|</span>
              <span>{event.series}</span>
            </p>
            <h2 id="event-title" className={styles.bannerTitle}>{event.title}</h2>
            <dl className={styles.bannerFacts}>
              <div>
                <dt>Date</dt>
                <dd>
                  <time dateTime={event.startDate}>{event.dateLabel}</time> • {event.timeLabel}
                </dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>{event.venueName}, {event.venueAddress.replace("The Capital, ", "")}, {event.city}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{event.format}</dd>
              </div>
            </dl>
            <a href="#register" className={styles.bannerCta}>Request your invitation →</a>
          </div>
        </section>

        {/* Agenda */}
        <section className={`${styles.container} ${styles.section}`} aria-labelledby="agenda-title">
          <h2 id="agenda-title" className={styles.sectionTitle}>Afternoon Program &amp; Roundtable Flow</h2>
          <p className={styles.sectionMeta}>
            {event.dateLabel} • {event.venueName}, {event.venueAddress.replace("The Capital, ", "")}, {event.city}
          </p>
          <ol className={styles.agenda}>
            {event.agenda.map((item) => (
              <li key={item.time} className={styles.agendaRow}>
                <span className={styles.agendaTime}>{item.time}</span>
                <div className={styles.agendaBody}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Audience & hosts */}
        <section className={`${styles.container} ${styles.section}`} aria-labelledby="audience-title">
          <p className={styles.eyebrow}>Audience &amp; Hosts</p>
          <h2 id="audience-title" className={styles.sectionTitle}>Curated Executive Peer Group &amp; Event Hosts</h2>
          <div className={styles.split}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Who Should Attend</h3>
              <ul className={styles.audienceList}>
                {event.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className={styles.note}>Note: {event.audienceNote}</p>
            </div>
            <div className={`${styles.panel} ${styles.panelTinted}`}>
              <h3 className={styles.panelTitle}>Hosted By</h3>
              {event.hosts.map((h) => (
                <div key={h.name} className={styles.host}>
                  <h4>
                    {h.name}
                    {h.role ? <span> ({h.role})</span> : null}
                  </h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className={`${styles.container} ${styles.section}`} aria-labelledby="register-title">
          <p className={styles.eyebrow}>Request Your Invitation</p>
          <h2 id="register-title" className={styles.sectionTitle}>Executive Seat Nomination &amp; Registration Form</h2>
          <p className={styles.sectionLead}>
            Complete the details below to request a seat. Confirmed attendees will receive calendar credentials and venue
            access details.
          </p>
          <RegistrationForm event={event} />
        </section>

        <p className={styles.legal}>
          © 2026 Salesforce &amp; Hadron. All rights reserved. • {event.dateLabel} • {event.venueName},{" "}
          {event.venueAddress.replace("The Capital, ", "")}, {event.city}
        </p>
      </main>
      <Footer />
    </>
  );
}
