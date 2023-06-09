import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Product from "./Product";
import NoPage from "./NoPage";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">DPU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/product">Foods</Nav.Link>
              <Nav.Link href="/nopage">Member</Nav.Link>
            </Nav>
            <div style={{ color: "white" }}>Anchana Srichamnong</div>
          </Container>
        </Navbar>
        <p></p>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Product />} />
                <Route path="/product" element={<Product />} />
                <Route path="/nopage" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
