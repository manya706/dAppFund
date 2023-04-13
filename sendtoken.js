async function Click1()
{
  try {
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  document.getElementById('address_show').innerText = accounts[0];
  let s = "0x" + (3000000000000000000).toString(16);
  // document.getElementById('address_show').innerText=accounts;
  const txHash = await ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: accounts[0], // The user's active address.
        to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970", // Required except during contract publications.
        value: s, // Only required to send ether to the recipient from the initiating external account.
        gasPrice: "0x09184e72a000", // Customizable by the user during MetaMask confirmation.
        gas: "0x2710", // Customizable by the user during MetaMask confirmation.
      },
    ],
  });
  console.log(txHash);
} catch (error) {
  console.error(error);
}
}


// document
//   .getElementById("sendtokenss")
//   .addEventListener("click", async (event) => {
//     try {
//       alert("10");
//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       alert("5");
//       let s = "0x" + (3000000000000000000).toString(16);
//       const txHash = await ethereum.request({
//         method: "eth_sendTransaction",
//         params: [
//           {
//             from: accounts[0], // The user's active address.
//             to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970", // Required except during contract publications.
//             value: s, // Only required to send ether to the recipient from the initiating external account.
//             gasPrice: "0x09184e72a000", // Customizable by the user during MetaMask confirmation.
//             gas: "0x2710", // Customizable by the user during MetaMask confirmation.
//           },
//         ],
//       });
//       console.log(txHash);
//     } catch (error) {
//       console.error(error);
//     }
//   });





// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("sendtokenss");
//   button.addEventListener("click", async (event) => {
//     try {
//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts"
//       });
//       alert(accounts);
//       document.getElementById('address_show').innerText=accounts;
//       let s = "0x" + (3000000000000000000).toString(16);
//       const txHash = await ethereum.request({
//         method: "eth_sendTransaction",
//         params: [
//           {
//             from: accounts, // The user's active address.
//             to: "0x946Cdad10f564C4e428e19E8A3B727511980ee45", // Required except during contract publications.
//             value: s, // Only required to send ether to the recipient from the initiating external account.
//             gasPrice: "0x09184e72a000", // Customizable by the user during MetaMask confirmation.
//             gas: "0x2710", // Customizable by the user during MetaMask confirmation.
//           },
//         ],
//       });
//       console.log(txHash);
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });
