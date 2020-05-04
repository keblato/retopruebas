import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../Like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
    it("Defaults to be 0 likes label", () => {
        const label = container.querySelector("#cantLikes");
        expect(label.textContent).toBe("Likes: 0");
      });

      it("Click like increment one", () => {
        const button = container.querySelector("#increment");
        const label = container.querySelector("#cantLikes");
        act(() => {
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(label.textContent).toBe("Likes: 1");
      });

      it("Click like decrement one", () => {
        const button = container.querySelector("#decrement");
        const label = container.querySelector("#cantLikes");
        act(() => {
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(label.textContent).toBe("Likes: -1");
      });
})