import { hire } from '../assets'; 
import styles, { layout } from '../style'; 
import Button from './Button'; 

const CardDeal = () => (
  <section id="candidates" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>We also offer a wide  
          <br className="sm:block hidden" /> range of  services to all 
          our candidates: 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <li>CV Writing Servies</li>
          <li>Interview Advice And Guidance</li>
          <li>On-Going Support Once Placed On Job </li>
          <li>Timesheets And Payroll</li>
          <li>Temporary, Permanent And Contract {"  "} Recruitment</li>
          </p>
          <Button styles="mt-10"  />
    </div>
    <div className={layout.sectionImg}>
      <img src={hire} alt="card" className="w-[100%] h-[100%] rounded-[10px]" /> 

    </div>
    
  </section>
); 

export default CardDeal

