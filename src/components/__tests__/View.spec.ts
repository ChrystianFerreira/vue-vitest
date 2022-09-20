import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import View from "../View.vue";

describe("View", () => {
  const viewText = "Hello from view";

  it("render span correctly", async () => {
    const viewId = "viewId";

    render(View, {
      props: { element: "span", id: viewId },
      slots: {default: viewText}
    });

    const view = await screen.findByText(viewText);

    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN");
  });

  it("snap shot matches", () => {
    const wrapper = render(View, { props: { element: "div" }});
    expect(wrapper).toMatchSnapshot();
  })
});