import css from "./page.module.css";

const Home = () => {
  return (
    <main className={css.main}>
      <div className={css.hero}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.subtitle}>
          Organize your thoughts. Boost your productivity.
        </p>
      </div>

      <div className={css.container}>
        <section className={css.section}>
          <h2 className={css.heading}>About NoteHub</h2>
          <p className={css.description}>
            NoteHub is a simple and efficient application designed for managing
            personal notes. It helps keep your thoughts organized and accessible
            in one place, whether you are at home or on the go.
          </p>
        </section>

        <section className={css.section}>
          <h2 className={css.heading}>Features</h2>
          <ul className={css.features}>
            <li>📝 Clean and minimal writing interface</li>
            <li>🔍 Keyword search for quick access</li>
            <li>📂 Structured organization with tags</li>
            <li>☁️ Access notes anywhere, anytime</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Home;
