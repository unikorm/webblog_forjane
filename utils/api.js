// // utils/api.js
// import fs from 'fs';
// import path from 'path';
// import {marked} from "marked";
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'blog');


// const getAllPostSlugs = () => {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// const getPostData = (id) => {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//       // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
//       // Parse Markdown content to HTML string
//     const contentHtml = marked.parse(matterResult.content);
  
//     return {
//         id,
//         contentHtml,
//         ...metaData,
//     };
// }

// export getPostData;
// export getAllPostSlugs;
