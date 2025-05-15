import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <div className="flex-1 flex flex-col mt-10 text-white">
          <p className="font-bold">M. Suppiah</p>
          <p>Managing Director</p>
          <p>+(6)016-2440 677</p>
          <p>gloryimpact238@gmail.com</p>
          <br/>

          <p className="mt-5">8 Avenua Business Center</p>
          <p>A-3-9 Jalan 8/1, 46000</p> 
          <p>Petaling Jaya, Selangor</p>
        </div>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>


  </section>
);

export default CTA;
