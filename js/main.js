function myFunction() {
   let date = new Date();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();
   alert(`${hours}:${minutes}:${seconds}`);
}
