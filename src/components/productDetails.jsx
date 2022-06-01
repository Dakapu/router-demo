import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let params = useParams();
  return (
    <div>
      <h1>Product Details - {params.id}</h1>
      <button onClick={handleSave()}>Save</button>
    </div>
  );
}

function handleSave() {
  return null;
}
