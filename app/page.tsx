import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import { getAllPostsForHome } from "../lib/api";

export default async function page() {
  const allPosts = await getAllPostsForHome(false);
  const edges = allPosts.edges;
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Container>
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  );
}
