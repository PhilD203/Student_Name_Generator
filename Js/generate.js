$(document).ready(function(){
  console.log("Ready!");
});

var cGroup = ["Kenia", "Issac", "Sebastian", "Jadius", "Chris F.", "Amelia", "Alexandra", "Alicia", "Pharah", "Irmalee", "Chris L.", "Kayla", "Alanis", "Ata", "Brianna", "Ema", "Zach", "Ashley", "Diamond", "Luis"]

var bGroup = ["Abel", "Kayla", "Alex C.", "Joliani", "Josmarina", "Alex G.", "Jarius", "Jardin", "Allen", "Yaksh", "Noah", "Makaela", "Brenda", "Bobby", "Sergio", "Josh", "Arelis", "Ethan", "Niyana", "Nick", "Chris", "Mitchell"]

var aGroup = ["Carlos A.", "Sebastian", "Alexia", "Elyse", "Malachi", "Luffy", "Gael", "Cynthia", "Cristian", "Jenny", "Kayden", "Dakota", "Tahari", "Matthew", "Eion", "Jillyan", "Angelina", "Kiara", "Chelmari", "Christine", "Kaitlyn", "Isaiah", "Gabby", "Carlos Z."]


function newStudentC(){ 
  var randomStudentC = cGroup[Math.floor(Math.random() * cGroup.length)];
  console.log(randomStudentC);
  $("h1").text(randomStudentC);
}


function newStudentB(){ 
  var randomStudentB = bGroup[Math.floor(Math.random() * bGroup.length)];
  console.log(randomStudentB);
  $("h1").text(randomStudentB);
}

function newStudentA(){ 
  var randomStudentA = aGroup[Math.floor(Math.random() * aGroup.length)];
  console.log(randomStudentA);
  $("h1").text(randomStudentA);
}















  