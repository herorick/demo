import Link from "next/link";
import MainLayout from "../layouts/mainLayout";
import Head from "next/head";

const Home = () => {
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
            <div className="post-preview">
              <Link href="/post">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </Link>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <Link href="/post">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </Link>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on September 18, 2014
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <Link href="/post">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </Link>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on August 24, 2014
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <Link href="/post">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </Link>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on July 8, 2014
              </p>
            </div>
            <hr />
            {/* Pager */}
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

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
