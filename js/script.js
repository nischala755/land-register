async function connectMetaMask() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected:', accounts[0]);
            alert('Connected to MetaMask with account: ' + accounts[0]);
        } catch (error) {
            console.error('User denied account access', error);
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
    }
}

async function registerLand() {
    const landID = prompt("Enter the Land ID:");
    const value = prompt("Enter the value of the land:");

    if (landID && value) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const web3 = new Web3(Web3.givenProvider);

        const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        const abi = [/* ABI Array here */];

        const contract = new web3.eth.Contract(abi, contractAddress);

        contract.methods.registerLand(landID, value).send({ from: account })
            .then(receipt => {
                console.log('Transaction receipt:', receipt);
                alert('Land registered successfully!');
                // Optionally, reload or update transaction details
            })
            .catch(error => {
                console.error('Error registering land:', error);
            });
    } else {
        alert('Land ID and value are required.');
    }
}
