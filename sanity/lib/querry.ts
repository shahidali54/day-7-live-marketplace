import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]`;
export const four = groq `*[_type == "product"][0..3]`;
export const shirtBanner = groq `*[_type == "product" && "shirtbanner" in tags]`;

