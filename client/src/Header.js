import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: "include",
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: "include",
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="box1"><img href="./bloglogo.png" ></img>My Blog</Link>

      <nav>
        {username && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/create" className="create-post-btn">Create Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}

        {!username && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/create" className="create-post-btn">Create Post</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
          </>
        )}
      </nav>
    </header>
  );
}
