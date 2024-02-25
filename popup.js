document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('operation').addEventListener('change', toggleInputZ);
    toggleInputZ(); // Call it once on load to set the initial state
});

function toggleInputZ() {
    const operation = document.getElementById('operation').value;
    const valueZInput = document.getElementById('valueZ');
    // Show the Z input only for the 'compoundPercent' operation
    if (operation === 'compoundPercent') {
        valueZInput.style.display = 'inline-block'; // Show the Z input
    } else {
        valueZInput.style.display = 'none'; // Hide the Z input for other operations
    }
}

let numericResult = ''; // Store the numeric result for clipboard copying

document.getElementById('calculate').addEventListener('click', function() {
    const valueX = parseFloat(document.getElementById('valueX').value);
    const valueY = parseFloat(document.getElementById('valueY').value);
    const valueZ = parseFloat(document.getElementById('valueZ').value || 1); // Default to 1 if not provided or visible
    const operation = document.getElementById('operation').value;
    let resultText = '';

    switch (operation) {
        case 'percentOf':
            numericResult = ((valueX / 100) * valueY).toFixed(2);
            resultText = `${valueX}% of ${valueY} is @@numericResult@@`;
            break;
        case 'percentFrom':
            numericResult = ((valueX / valueY) * 100).toFixed(2);
            resultText = `${valueX} as a percentage of ${valueY} is @@numericResult@@%.`;
            break;
        case 'percentChange':
            numericResult = (((valueY - valueX) / valueX) * 100).toFixed(2);
            resultText = `The percentage change from ${valueX} to ${valueY} is @@numericResult@@%`;
            break;
        case 'originalValue':
            numericResult = (valueY / (1 + (valueX / 100))).toFixed(2);
            resultText = `The original value before a ${valueX}% change to reach ${valueY} is @@numericResult@@`;
            break;
        case 'percentDifference':
            numericResult = ((Math.abs(valueX - valueY) / ((valueX + valueY) / 2)) * 100).toFixed(2);
            resultText = `The percentage difference between ${valueX} and ${valueY} is @@numericResult@@%`;
            break;
        case 'compoundPercent':
            numericResult = (valueX * Math.pow((1 + valueY / 100), valueZ)).toFixed(2);
            resultText = `After applying a ${valueY}% change ${valueZ} times to ${valueX}, the final value is @@numericResult@@`;
            break;
        case 'reversePercentage':
            numericResult = (valueX / (valueY / 100)).toFixed(2);
            resultText = `The whole, where ${valueX} represents ${valueY}% is @@numericResult@@`;
            break;
    }

    // Replace the placeholder with a styled span containing numericResult
    resultText = resultText.replace('@@numericResult@@', `<span id="numericResult">${numericResult}</span>`);

    // Set the innerHTML of your result container to resultText
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('copyToClipboard').style.display = 'inline-block';
});

document.getElementById('copyToClipboard').addEventListener('click', function() {
    navigator.clipboard.writeText(numericResult).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

document.querySelectorAll('#valueX, #valueY, #valueZ').forEach(input => {
    input.addEventListener('keyup', function() {
        // Simple check to enable the calculate button
        const valueX = document.getElementById('valueX').value;
        const valueY = document.getElementById('valueY').value;
        const valueZ = document.getElementById('valueZ').value;
        const calculateButton = document.getElementById('calculate');
        
        if (valueX && !isNaN(valueX) && valueY && !isNaN(valueY)) {
            calculateButton.disabled = false;
        } else {
            calculateButton.disabled = true;
        }
    });
});

