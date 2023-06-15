import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // Arrange - render Greeting component
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  // 13 & 14 === same
  //   const helloWorldElement = screen.getByText("Hello World", { exact: false });
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
