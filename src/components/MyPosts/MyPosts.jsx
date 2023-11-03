import styles from './MyPosts.module.scss';
import Post from './Post';





export default function MyPosts({words}) {

console.log(words);
words.map(p=> <Post likesCount={p.likesCount} message={p.message} />)

  return (
    <>
    <div className={styles.Post}>
      <div>ava+description</div>
      <div>My posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
      </div>
    
    </div>
    </>
  );
}
