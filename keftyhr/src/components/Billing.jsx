import { apple, bill, google, card } from '../assets'; 
import styles, { layout } from '../style'; 
import Button from './Button'; 

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Payroll Services</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Save <strong>time and money</strong> on your 
          payroll expenses! We will act as the official 
          employer of record while the employee works for your company.
          This will allow you to focus 100% of your time and energy on 
          just your business. 
        </p>
        <Button styles="mt-10" />
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          

        </div>
      </div>

  </section>

)
  

export default Billing