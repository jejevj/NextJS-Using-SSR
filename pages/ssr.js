// pages/ssr.js
import React from "react";

function SSRPage({ serverData }) {
  return (
    <div>
      <h1>Server-Side Rendering in Next.js</h1>
      <div>
        {serverData.map((data) => (
          <p key={data.id}>{data.title}</p>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
 
  return {
    props: {
      serverData: data,
    },
  };
}

export default SSRPage;
