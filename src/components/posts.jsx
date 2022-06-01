import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";

export default function Posts() {
  const locationSearch = queryString.parse(location.search);

  let params = useParams();
  //?sortBy=newest&approved=true

  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
}
