import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
// import { Testimonial } from "@/types/testimonial";
interface Exhibition {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
  description: string;
  link: string;
}



export const exhibitionData: Exhibition[] = [
  {
    id: 1,
    name: "InterTex / InterShoes Portugal",
    date: "20-22 May, 2025",
    location: "Porto, Portugal",
    image: "",
    description:
      "A premier textile and footwear exhibition in Portugal, connecting industry professionals with global markets.",
    link: "https://www.intertexportugal.com",
  },
  {
    id: 2,
    name: "Bangladesh Denim Expo",
    date: "12-13 May, 2025",
    location: "Dhaka, Bangladesh",
    image: "",
    description:
      "A key event in the denim industry, showcasing sustainable innovations and market trends.",
    link: "https://www.bangladeshdenimexpo.com",
  },
  {
    id: 3,
    name: "HomeTex",
    date: "20-23 May, 2025",
    location: "Istanbul, Turkey",
    image: "",
    description:
      "An international exhibition highlighting home textiles, fabrics, and interior design trends.",
    link: "https://www.hometexistanbul.com",
  },
  {
    id: 4,
    name: "InterTex / InterShoes Tunisia",
    date: "16-18 October, 2025",
    location: "Sousse, Tunisia",
    image: "",
    description:
      "A major event for textile and footwear businesses, fostering trade connections in North Africa.",
    link: "https://www.intertextunisia.com",
  },
];
