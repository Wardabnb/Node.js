const fs = require("fs");

// Créez un fichier nommé "welcome.txt" contenant une ligne "Hello Node".
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created and saved!");

  // Lisez le fichier "welcome.txt" et affichez son contenu dans la console.
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
