
import PostCard from "./postCard";
import {getSortedPostsData} from "../utils/api";

// export async function getStaticProps() {
//     const allPostsData = getPostData();
//     return {
//       props: {
//         allPostsData,
//       },
//     };
//   };

const PostList = ({ allPostsData }) => {
  return (
    <section>
      <h2>Blog</h2>
      <ul>
          {/* {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))} */}
        </ul>
    </section>
  );
}

export default PostList;
