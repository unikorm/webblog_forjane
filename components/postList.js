
import PostCard from "./postCard.js";
import { getSortedPostsData } from "../utils/api.js";


const PostList = () => {
    const posts = getSortedPostsData(); // Fetch the data

    return (
    <section>
      <h2>Blog</h2>
        <ul>
        {posts.map((postData) => (
          <PostCard key={postData.id} postData={postData} />
        ))}
        </ul>
    </section>
  );
}

export default PostList;
