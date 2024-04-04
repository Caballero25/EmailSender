sendInfo = document.getElementById("sendInfo")
sendInfo.addEventListener("click", () => {
  var emisor = document.getElementById("emisor").value;
  var receptor = document.getElementById("receptor").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ElasticEmailUser", /*Set your credentials on https://elasticemail.com/select-product?r=20b444a2-b3af-4eb8-bae7-911f6097521c*/ 
    Password: "ElasticEmailPassword",
    To: receptor,
    From: emisor,
    Subject: asunto,
    Body: mensaje,
  })
});

/**By David Caballero - FullStack Web Developer */