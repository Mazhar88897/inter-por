import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Muhammad Mazhar",
    designation: "Logistics Manager @GlobalTradeCorp",
    image: image1,
    content:
      "Working with this company has transformed our supply chain operations. Their timely delivery and excellent service ensure we stay ahead in the global market.",
  },
  {
    id: 2,
    name: "Khatija Essa",
    designation: "CEO @TransWorldShipping",
    image: image2,
    content:
      "Their attention to detail and seamless handling of container logistics have been key to our company's success in international trade.",
  },
  {
    id: 3,
    name: "Ghous-us-zaman",
    designation: "Operations Head @GlobalTradeCorp",
    image: image1,
    content:
      "We rely on their expertise for customs clearance and container management. Their professionalism is unmatched in the industry.",
  },
  {
    id: 4,
    name: "Yusra Khan",
    designation: "Director @TransWorldShipping",
    image: image2,
    content:
      "Exceptional service from start to finish! Their solutions for remote collaboration and real-time tracking have simplified our shipping process significantly.",
  },
];
