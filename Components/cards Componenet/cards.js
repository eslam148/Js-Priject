console.log("about");

 function get_url(url) {
  fetch(url)
  .then((res)=>{
    return res.json();
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log("Data from json file is corrupted!!");
    });

  }
  
  get_url("http://localhost:3000/products");


  // ========== error solved ==============

// function get_url(url) {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json(); // Parse JSON data
//     })
//     .then((data) => {
//       console.log(data); // Log the parsed JSON data
//     })
//     .catch((error) => {
//       console.log("Data from JSON file is corrupted!!", error.message);
//     });
// }

//   get_url("http://localhost:3000/products");

// async function get_url(url) {
//   try {
//     let response = await fetch(url);
//     let data = await response.json(); // Parse the JSON data
//     console.log(data);
//   } catch (error) {
//     console.log("Data from JSON file is corrupted!!", error);
//   }
// }

