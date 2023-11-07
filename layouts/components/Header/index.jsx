import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
    const { data: session } = useSession();
    const isLogin = !!session;
  return (
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            Menu <i className="fa fa-bars" />
          </button>
          <Link className="navbar-brand" href="/">
            Start Bootstrap
          </Link>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/post">Sample Post</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/createPost">Create Post</Link>
            </li>
            {isLogin && (
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
