let account;
document.getElementById('connect-button').addEventListener('click', event => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
            ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
                account = accounts[0];
                console.log(account);

                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.textContent = "Wallet Has Been Successfully Connected To This Site";
                document.body.appendChild(popup);
                document.getElementById('address_show').innerText = account;
                setTimeout(() => {
                    popup.classList.add('show');
                    setTimeout(() => {
                        popup.classList.remove('show');
                        setTimeout(() => {
                            popup.remove();
                        }, 500);
                    }, 1200);
                }, 100);

            });
        } catch (err) {
            console.error(err.message);
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.textContent = "There has been some error in connection";
            document.body.appendChild(popup);

            setTimeout(() => {
                popup.classList.add('show');
                setTimeout(() => {
                    popup.classList.remove('show');
                    setTimeout(() => {
                        popup.remove();
                    }, 500);
                }, 1200);
            }, 100);
        }
    } else {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = "It seems, you don't have metamask on your device, Please install MetaMask First";
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
            setTimeout(() => {
                popup.classList.remove('show');
                setTimeout(() => {
                    popup.remove();
                }, 500);
            }, 1200);
        }, 100);
        console.log("Please install MetaMask");
    }
});