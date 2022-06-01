import React from "react";
import { useParams } from "react-router-dom";

export default function Posts() {
  let params = useParams();
  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
}
