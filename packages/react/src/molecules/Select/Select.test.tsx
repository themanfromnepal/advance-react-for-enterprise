import React from "react";
import Select from "./Select";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

//Test to renders all options passed to the Select component
test("renders all options passed to it", () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />);

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  //Check if all options are rendered
  expect(getAllByRole("menuitemradio")).toHaveLength(options.length);
});

//Test to check if custom renderOption method is used
test("renders options using custon renderOption method if passed as prop", () => {
  const { getAllByTestId, getByTestId } = render(
    <Select
      options={options}
      renderOption={({ option, getOptionRecommendedProps }) => {
        return (
          <li data-testid="CustomRenderOption" {...getOptionRecommendedProps()}>
            {option.label}
          </li>
        );
      }}
    />
  );

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  expect(getAllByTestId("CustomRenderOption")).toHaveLength(options.length);
});

//Test to check if onOptionSelected prop is called with selected option and its index
test("calls the onOptionSelected prop with the selected option and its index if passed", () => {
  const onOptionSelected = jest.fn();
  const { getAllByRole, getByTestId } = render(
    <Select options={options} onOptionSelected={onOptionSelected} />
  );

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  //FireEvent performs a click on the first option in the options menu
  fireEvent.click(getAllByRole("menuitemradio")[0]);

  //Expect the onOptionSelected to have been called with the first option and its index
  expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0);
});

//Test to check the button label changes to the selected option label
test("the button label changes to the selected option label", () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />);

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  //FireEvent performs a click on the first option in the options menu
  fireEvent.click(getAllByRole("menuitemradio")[0]);

  //Expect the onOptionSelected to have been called with the first option and its index
  expect(getByTestId("DseSelectButton")).toHaveTextContent(options[0].label);
});

//Test to check the snapshot of the Select component in different states
test.skip("snapshot of the selected option state", () => {
  const { getAllByRole, getByTestId, asFragment } = render(
    <Select options={options} />
  );

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  //FireEvent performs a click on the first option in the options menu
  fireEvent.click(getAllByRole("menuitemradio")[0]);

  expect(asFragment()).toMatchSnapshot();
});

//Test to take snapshot of base state
test.skip("snapshot of the base state", () => {
  const { asFragment } = render(<Select options={options} />);

  expect(asFragment()).toMatchSnapshot();
});

//Test to take the snapchot of the options menu open state
test.skip("snapshot of the options menu open state", () => {
  const { getByTestId, asFragment } = render(<Select options={options} />);

  //FireEvent performs a click on the select button to open the options menu
  fireEvent.click(getByTestId("DseSelectButton"));

  expect(asFragment()).toMatchSnapshot();
});

//Test to take whehter the select label is customizable
test("can customize select label", () => {
  const customLabel = "THIS IS A CUSTOM LABEL";
  const { getByText } = render(
    <Select options={options} label={customLabel} />
  );

  expect(getByText(customLabel)).toBeInTheDocument();
});
