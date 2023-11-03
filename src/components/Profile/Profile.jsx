// import styles from './Profile.module.scss';
import MyPosts from '../MyPosts/MyPosts';
import Content from '../Content/Content';


export default function Profile({words}) {

console.log(words);

  return (
    <>
      <MyPosts words={words} />
      <Content />
    </>
  );
}
