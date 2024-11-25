/* eslint-disable react/prop-types */
import AccordionItem from './AccordionItem';

const InfoRental = ({ description, equipments }) => {
  return (
    <section className="info-rental">
      <AccordionItem 
        title="Description"
        content={description} 
      />
      <AccordionItem 
        title="Équipements"
        content={equipments}
      />
    </section>
  );
};

export default InfoRental;
