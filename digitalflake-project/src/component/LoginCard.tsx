import React from "react";

const LoginCard = () => {
  return (
    <section>
      <article>
        <form action="">
          <input type="email" placeholder="enter email" />
          <input type="password" />
          <span><a href="#">Forget Password</a></span>
          <button type="submit">Login</button>
        </form>
      </article>
    </section>
  );
};

export default LoginCard;
