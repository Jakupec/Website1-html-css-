var pozdrav ="Dobar dan";
console.log(pozdrav);

var animacija = [
    { transform: "scale(1.3) " },
    { transform: "scale(1.8)  " },
    { transform: "scale(2.3)  " },
    { transform: "scale(1.6)  " },
    { transform: "scale(1.9)  " },
{transform:"scale (2.6)"},
  ];

  const vrijeme = { duration: 1000, iterations: 3 };

  if (document.title=="multimedija"){
  document.querySelector("#slike_max").addEventListener("click",function(){
  document.querySelector("#slike_max").animate(animacija,vrijeme);
  })
}