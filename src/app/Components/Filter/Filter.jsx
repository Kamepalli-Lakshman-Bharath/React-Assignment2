import styles from "./Filter.module.css";
import Cards from "../Cards/Cards";
const Filter = () => {
  return (
    <section className={styles.Section}>
      <p className={styles.heading}>Latest Posts</p>
      <div className={styles.FilterSec}>
        <img
          className={styles.image}
          alt="Filter Icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
        />
        <p className={styles.Filter}>Filter By Category</p>
      </div>
      <div className={styles.CategoriesSec}>
        <button className={styles.Btn}>All</button>
        <button className={styles.Btn}>Artificial Intelligence</button>
        <button className={styles.Btn}>Cloud Computing</button>
        <button className={styles.Btn}>DevOps</button>
        <button className={styles.Btn}>Programming Languages</button>
        <button className={styles.Btn}>Mobile Application Development</button>
        <button className={styles.Btn}>Technology and Tools</button>
        <button className={styles.Btn}>Get a Job in a Tech Company</button>
        <button className={styles.Btn}>Others</button>
      </div>
      <div className={styles.wrapper}>
        <Cards
          src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
          heading="Fresh Graduate or IT professional Looking for a..."
          author="Arman Ahmed"
          date="05 Jul 2019"
          descreption="If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology"
        />
        <Cards
          src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
          heading="Introducing you all to EdYoda - www.edyoda.com"
          author="Arman Ahmed"
          date="05 Jul 2019"
          descreption="Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of."
        />
        <Cards
          src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
          heading="From identity crisis to the Success Story - The..."
          author="Kalyan Mahalingam"
          date="05 Jul 2019"
          descreption="DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in"
        />
        <Cards
          src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
          heading="Typical day of Data Scientist - An insider story!"
          author="Saurav Ghosh"
          date="05 Jul 2019"
          descreption="I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world"
        />
        <Cards
          src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
          heading="Amazon Web Services (AWS) Cloud Day -"
          author="Kalyan Mahalingam"
          date="05 Jul 2019"
          descreption="It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so..."
        />
        <Cards
          src="	https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
          heading="edYoda Meetup #01 : A Date with Cloud"
          author="Ashish Pandey"
          date="05 Jul 2019"
          descreption="I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by"
        />
      </div>
    </section>
  );
};
export default Filter;
