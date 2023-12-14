import { Metadata, ResolvingMetadata } from "next";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import Container from "@/components/container";
import Header from "@/components/header";
import { CMS_NAME } from "@/lib/constants";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";
import Tags from "@/components/tags";
import SectionSeparator from "@/components/section-separator";
import MoreStories from "@/components/more-stories";

type Props = {
  params: { slug: string };
};

export default async function page({ params }: Props) {
  console.log("params: ---", params);
  const data = await getPostAndMorePosts(params?.slug);
  const { post, posts } = data;
  const morePosts = posts?.edges;

  return (
    <Container>
      <Header />
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.featuredImage}
          date={post.date}
          author={post.author}
          categories={post.categories}
        />
        <PostBody content={post.content} />
        <footer>
          {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
        </footer>
      </article>

      <SectionSeparator />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const data = await getPostAndMorePosts(params?.slug);

  const { post } = data;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post.title} | Next.js Blog Example with ${CMS_NAME}`,
    openGraph: {
      images: [post.featuredImage?.node.sourceUrl, ...previousImages],
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug();

  return allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [];
}
