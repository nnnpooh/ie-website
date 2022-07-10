import styles from "/styles/Layout.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className={styles.logo}>
            <a href="/" className="flex items-center py-4 px-2">
              <img src="/industrial_engineering_logo.png" alt="ไออี มช" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className={styles.menuItem}>Home</a>
            <a href="/shop" className={styles.menuItem}>About</a>
            <a href="/how_to" className={styles.menuItem}>Curriculum</a>
            <a href="/about_us" className={styles.menuItem}>Members</a>
            <a href="/comming_soon" className={styles.menuItem}>Research</a>
            <a href="/contact" className={styles.menuItem}>Resources</a>
            <a href="/" className={styles.menuItem}>Contact</a>
            <a href="/" className={styles.menuItem}>EN</a>
            <a href="/" className={styles.menuItem}>Search</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
