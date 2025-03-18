
import Image from "next/image";
interface Exhibition {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
  description: string;
  link: string;
}

const SingleTestimonial = ({ review }: { review: Exhibition }) => {
  const { name, date, image, location, description, link} = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name} | {date}
          </h3>
          <p>{location}</p>
        </div>
        {/* <Image width={60} height={50} className="" src={image} alt={name} /> */}
      </div>

      <p>{description}</p>
      <a className="pt-2 font-bold text-yellow-500" href={link} > Link to website</a>
    </div>
  );
};

export default SingleTestimonial;
