import React, { Component } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function ProductDetails() {
  let params = useParams();
  let history = useNavigate();

  async function handleSave() {
    //useful for logins, so users cannot go back to the login-page after they've already logged in
    history("/products", { replace: true });
  }

  return (
    <div>
      <h1>Product Details - {params.id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
