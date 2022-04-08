import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
    rest.get(
      "https://randomuser.me/api/",
      (req, res, ctx) => {
        return res(
          ctx.json({results: [{name: {
            title: "Miss",
            first: "Padme",
            last: "Amidala",
          },
          picture: {
            thumbnail:
              "https://randomuser.me/api/portraits/thumb/women/87.jpg",
          },}  
          ]})
        );
      }
    )
  );
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  
  test("load user mock", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText(/Utilisateur/i));
    expect(container.getElementsByTagName("img").length).toBe(1);
  });