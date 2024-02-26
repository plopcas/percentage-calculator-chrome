# Percentage Calculator Chrome Extension

## Description

The Percentage Calculator Chrome Extension is a simple, user-friendly tool designed to perform various percentage calculations right from your Chrome browser. With options for calculating percent of a value, percent increase, and percent decrease, this extension is perfect for quick math operations without leaving your browser window.

## Features

- Calculate what a percentage of a value is.
- Determine the percent increase from one value to another.
- Find out the percent decrease from one value to another.
- Copy the result to clipboard with a single click.

## Operations

This calculator provides a variety of operations to perform percentage-based calculations:

1. **What is X% of Y?**

   - **Calculation:** `(X / 100) * Y`
   - **Explanation:** Calculates how much X% represents of Y by converting X percent to a decimal and multiplying by Y.

2. **X is what percent of Y?**

   - **Calculation:** `(X / Y) * 100`
   - **Explanation:** Determines what percentage X is of Y by dividing X by Y and converting the result to a percentage.

3. **What is the percentage increase/decrease from X to Y?**

   - **Calculation:** `((Y - X) / X) * 100`
   - **Explanation:** Calculates the percentage change (either increase or decrease) from X to Y by finding the ratio of the change relative to X and converting that ratio to a percentage.

4. **Original value before a X% increase/decrease from Y**

   - **Calculation:** For increases: `Y / (1 + (X / 100))`, For decreases: `Y / (1 - (X / 100))`
   - **Explanation:** Finds the original value before an X% change resulted in Y. The calculation adjusts Y based on whether the change was an increase or a decrease.

5. **Percentage difference between X and Y**

   - **Calculation:** `((|X - Y|) / ((X + Y) / 2)) * 100`
   - **Explanation:** Determines the percentage difference between X and Y by calculating the absolute difference, dividing by their average, and converting the result to a percentage.

6. **Value after Y% increase/decrease applied Z times to X**

   - **Calculation:** For increases: `X * (1 + Y / 100)^Z`, For decreases: `X * (1 - Y / 100)^Z`
   - **Explanation:** Calculates the value after applying a Y% change (increase or decrease) Z times to X, using compound interest formula principles.

7. **Calculate whole value when X represents Y% of it**
   - **Calculation:** `X / (Y / 100)`
   - **Explanation:** Finds the total value when X represents Y% of it by reversing the percentage calculation to derive the whole from a part.

Use these operations to quickly solve common percentage-related questions directly within the browser.

## Installation

### From the Chrome Web Store

1. Visit the [Chrome Web Store](#) link to our extension.
2. Click on "Add to Chrome" to install the extension.
3. Once installed, you'll see the extension's icon in your Chrome toolbar for easy access.

### Loading Unpacked (For Development)

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded this repository.
5. The extension should now appear in your extensions list and be accessible from the Chrome toolbar.

## Usage

Click on the extension icon in your Chrome toolbar to open the percentage calculator popup. Enter the values and select the type of calculation you want to perform. Click "Calculate" to see the result, and use the "Copy" button to copy the result to your clipboard.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Chrome Developer Documentation](https://developer.chrome.com/docs/extensions/)
