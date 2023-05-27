import Filter from "../Filter/Filter";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <>
    <section className={styles.Section}>
      <div className={styles.Left}>
        <div className={styles.Logo}>
          <div className={styles.LogoTop}>EDYODA</div>
          <p className={styles.LogoBottom}>Stories</p>
        </div>
        <div className={styles.Categories}>
          <p>Explore Categories</p> 
          <img className={styles.image}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="caret-down" />
        </div>
      </div>

      <div className={styles.Right}>
        <p className={styles.Info}>
          EdYoda is a learning and knowledge sharing platform for techies
        </p>
        <button className={styles.Btn}>Go To Main Website</button>
      </div>
    </section>
    <Filter/>
    </>
  );
};
export default TopBar;
