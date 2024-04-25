// pages/ssr.js
import React from "react";

function SSRPage({ serverData }) {
  return (
    <div>
      <h1>Server-Side Rendering in Next.js</h1>
      <p>{serverData}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const response = await fetch("https://cat-fact.herokuapp.com/facts/");
  const data = await response.json();

  return {
    props: {
      serverData: data,
    },
  };
}

export default SSRPage;
