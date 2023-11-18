import { mount } from "@vue/test-utils";
import CardTableLoading from "../CardTableLoading.vue";
import { describe, expect, it } from "vitest";

// Describe the component to be tested
describe("CardView", () => {
  // Test that the component is mounted or created.
  it("is a Vue instance", () => {
    var defaultProps = {
      title: "Test Title",
      // add additional props here
    };
    const wrapper = mount(CardTableLoading, { props: defaultProps });
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders props.title correctly", () => {
    var defaultProps = { title: "Test Title" };
    const wrapper = mount(CardTableLoading, { props: defaultProps });
    expect(wrapper.text()).toContain("Test Title");
  });
});
