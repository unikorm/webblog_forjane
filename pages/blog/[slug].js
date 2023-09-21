
// pages/blog/[slug].js

import { getAllPostSlugs } from '../../utils/api'; // Assuming you have a function to get all post slugs

export async function getStaticPaths() {
  const paths = await getAllPostSlugs(); // Replace with your own function to fetch post slugs

  // Map the paths to the required format for Next.js
  const formattedPaths = paths.map((slug) => ({ params: { slug } }));

  return {
    paths: formattedPaths,
    fallback: false, // Set to true if you want to enable fallback rendering
  };
}

export async function getStaticPaths() {
    const paths = await getAllPostSlugs();
    return {
      paths,
      fallback: false,
    }
  }
   
  export async function getStaticProps() {
    
  }
   
  export default function Page({ repo }) {
    return 
  }