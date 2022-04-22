import CreatePost from "../../components/CreatePost/CreatePost";
import PostList from "../../components/PostList/PostList";
import Section from "../../components/Section/Section";
import Stories from "../../components/Stories/Stories";
import style from "./home.module.scss";
export default function Home() {
  const stories = [1, 2, 3, 4, 5];
  return (
    <div className={style.container}>
      <Section key="story">
        <Stories items={stories} />
      </Section>
      <Section key="post">
        <CreatePost />
      </Section>
      <Section key="content">
        <PostList />
      </Section>
    </div>
  );
}
