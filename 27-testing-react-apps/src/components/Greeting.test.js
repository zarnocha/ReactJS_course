import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
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

  test('renders "good to see you" as a text if the button was NOT clicked', () => {
    render(<Greeting />);

    const goodToSeeYou = screen.getByText("good to see you", { exact: false });
    expect(goodToSeeYou).toBeInTheDocument();
  });

  test('renders "Changed!" if the button WAS clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");

    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
