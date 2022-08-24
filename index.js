function init(){
    const formData = {
        dogName: "Byron",
        dogBreed: "Poodle",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      fetch("http://localhost:3000/dogs", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
}
document.addEventListener("DOMContentLoaded", (event) => {
    init();
});
