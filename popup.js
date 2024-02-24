document.getElementById('calculate').addEventListener('click', function() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const operation = document.getElementById('operation').value;
    let result = 0;

    switch(operation) {
        case 'percentOf':
            result = (value1 / 100) * value2;
            break;
        case 'percentIncrease':
            result = ((value2 - value1) / value1) * 100;
            break;
        case 'percentDecrease':
            result = ((value1 - value2) / value1) * 100;
            break;
    }

    const resultText = result.toFixed(2);
    document.getElementById('result').innerText = `Result: ${resultText}`;
    // Show the copy button
    document.getElementById('copyToClipboard').style.display = 'inline';
});

// Add event listener for the copy button
document.getElementById('copyToClipboard').addEventListener('click', function() {
    const resultText = document.getElementById('result').innerText.split(': ')[1]; // Get only the number part
    // Use the Clipboard API to copy the result text
    navigator.clipboard.writeText(resultText).then(() => {
        // Optional: Display a message that the text was copied.
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
