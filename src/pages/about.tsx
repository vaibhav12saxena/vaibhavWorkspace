import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "./about.module.css";

const skills = {
  Frontend: ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "Angular", "Flutter", "Redux", "Micro-Frontends"],
  "UI & Design Systems": ["Storybook", "CSS Modules", "Styled Components", "Responsive Design", "Accessibility"],
  Backend: ["Node.js", "Python", "REST APIs", "GraphQL", "SQLite", "MEAN Stack"],
  "AI & ML": ["LangChain", "RAG", "LLM Integration"],
  "Tools & Infra": ["Webpack", "Vite", "Git", "CI/CD", "Docker", "AWS", "GTM", "GA", "Airbrake", "CDN"],
};

function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.fadeIn}`}>About Me</h1>
        <p className={`${styles.tagline} ${styles.fadeIn} ${styles.delay1}`}>
          Staff Software Engineer at Enphase Energy with 8+ years of experience
          building high-performance web and mobile applications at scale.
          IIT Delhi alumnus passionate about frontend architecture, cross-platform
          development, and building intelligent tools that solve real problems.
        </p>

        <div className={`${styles.section} ${styles.fadeIn} ${styles.delay2}`}>
          <h2 className={styles.sectionTitle}>Experience</h2>

          <div className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              <h3 className={styles.companyName}>Enphase Energy</h3>
              <span className={styles.companyMeta}>Full-time &middot; 4 yrs 2 mos &middot; Bengaluru, India</span>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.role}>Staff Software Engineer</h3>
                <span className={styles.duration}>Jul 2025 &ndash; Present</span>
              </div>
              <p className={styles.experienceDesc}>
                Currently building a config-driven Flutter app platform &mdash;
                architecting a reusable component library and solving dynamic UX
                flows like conditional forms and stale data handling.
              </p>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.role}>Senior Software Engineer</h3>
                <span className={styles.duration}>Mar 2022 &ndash; Jul 2025 &middot; 3 yrs 5 mos</span>
              </div>
              <ul className={styles.experienceList}>
                <li>Built core features in a React Native app (Enho 2.0), gaining solid experience in cross-platform mobile development.</li>
                <li>Set up GTM + GA (Looker Studio) for user behavior analytics; created shared JS module for tracking performance metrics across apps.</li>
                <li>Moved static assets to CDN to reduce FCP; contributed to breaking down large APIs to improve load times.</li>
                <li>Integrated Airbrake for real-time error logging and set up a custom Firehose → S3 → Quicksight pipeline for advanced analytics.</li>
                <li>Contributed to microfrontend migration, upgraded state from Backbone.js to Redux, and handled inter-app communication via shared libraries.</li>
                <li>Worked closely with product, design, and backend teams; onboarded new developers and led internal demos.</li>
              </ul>
            </div>
          </div>

          <div className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              <h3 className={styles.companyName}>Capgemini</h3>
              <span className={styles.companyMeta}>Full-time &middot; 3 yrs 10 mos &middot; Bengaluru, India</span>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.role}>Consultant</h3>
                <span className={styles.duration}>Apr 2021 &ndash; Mar 2022 &middot; 1 yr</span>
              </div>
              <ul className={styles.experienceList}>
                <li>Took ownership of complex frontend features in claims and monitoring apps using Angular.</li>
                <li>Led element-based search implementation to improve data accessibility on claims pages.</li>
                <li>Delivered onboarding sessions and mentored new joiners for faster team integration.</li>
                <li>Collaborated with cross-functional teams on API contracts and UI design alignment.</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.role}>Associate Consultant</h3>
                <span className={styles.duration}>Jun 2018 &ndash; Mar 2021 &middot; 2 yrs 10 mos</span>
              </div>
              <ul className={styles.experienceList}>
                <li>Developed reusable Angular components like calendars and search modules for Swiss Re&apos;s insurance claims application.</li>
                <li>Collaborated with backend and UI/UX teams to deliver consistent, user-friendly features.</li>
                <li>Assisted in upgrading the app from Angular 6 to Angular 9, ensuring smooth cross-browser compatibility.</li>
                <li>Created a MEAN stack demo app during training to strengthen full-stack skills.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.fadeIn} ${styles.delay3}`}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category}</h3>
              <div className={styles.skillsGrid}>
                {items.map((skill) => (
                  <span key={skill} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.section} ${styles.fadeIn} ${styles.delay3}`}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3 className={styles.role}>B.Tech</h3>
            </div>
            <p className={styles.company}>Indian Institute of Technology, Delhi</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
