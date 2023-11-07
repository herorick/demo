import { useSession } from "next-auth/react";
import React from "react";
import MainLayout from "../layouts/mainLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const renderContent = () => {
    if (!session) {
      return (
        <>
          <div>You must login before create post</div>
          <button onClick={() => router.push("/api/auth/signin")}>Login</button>
        </>
      );
    }
    return (
      <form
        action="results.php"
        method="POST"
        role="form"
        class="form-horizontal"
      >
        <div class="form-group">
          <label for="searchterm" class="col-sm-2 control-label">
            Blog Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="searchterm"
              name="searchterm"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="searchterm" class="col-sm-2 control-label">
            Blog Description
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="searchterm"
              name="searchterm"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div>
      <Head>
        <title>Create Post</title>
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
      {renderContent()}
    </div>
  );
};

CreatePost.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default CreatePost;
