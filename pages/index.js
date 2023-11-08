import Link from "next/link";
import MainLayout from "../layouts/mainLayout";
import Head from "next/head";
import Posts from "../components/post";

const Home = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header
        className="intro-header"
        style={{ backgroundImage: 'url("assets/images/home-bg.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <hr className="small" />
                <span className="subheading">
                  A Clean Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <Posts posts={posts} />
            <ul className="pager">
              <li className="next">
                <a href="#">Older Posts →</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export async function getStaticProps(context) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return {
    props: { posts },
    revalidate: 60,
  };
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
