
import Link from 'next/link';

const PostCard = ({ postData }) => {
  return (
    <li key={postData.id}>
      <Link href={`/blog/${postData.id}`}>
          <h2>{postData.title}</h2>
      </Link>
      <small>
      <p>Published on {postData.date}</p>
      </small>
      <p>{postData.content.substring(0, 100)}...</p>
    </li>
  );
}

export default PostCard;
