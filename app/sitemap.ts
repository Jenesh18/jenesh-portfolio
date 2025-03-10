import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { 
      url: "https://jenesh-portfolio.vercel.app/", 
      lastModified: new Date().toISOString() 
    }
  ];
}
