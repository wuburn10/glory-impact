import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} flex-col my-8 py-6`}>
    <div className="section-divider w-full mb-10" />

    <p className="font-poppins font-medium text-[14px] text-dimWhite uppercase tracking-widest mb-8 text-center">
      Trusted by leading companies
    </p>

    <div className={`${styles.flexCenter} flex-wrap w-full gap-8`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[160px] min-w-[120px] px-4 py-3`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="client-logo sm:w-[180px] w-[130px] object-contain"
          />
        </div>
      ))}
    </div>

    <div className="section-divider w-full mt-10" />
  </section>
);

export default Clients;
