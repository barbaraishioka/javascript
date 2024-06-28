const fs = require("fs");
const path = require("path");

const targetDir = "./"; // Diretório alvo para listar

function generateReadme(dir, level = 0, parentPath = "") {
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".svg"];
  const files = fs.readdirSync(dir);
  let readmeContent = "";

  files.forEach((file) => {
    // Ignora arquivos e pastas ocultas começando com um ponto (.)
    if (file.startsWith(".")) {
      return;
    }

    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const indent = "  ".repeat(level);
    const fileLink = path.posix.join(parentPath, file); // Usando path.posix.join para garantir barras normais mesmo em sistemas Windows

    // Ignora arquivos de imagem
    if (
      !stats.isDirectory() &&
      imageExtensions.includes(path.extname(file).toLowerCase())
    ) {
      return;
    }

    if (stats.isDirectory()) {
      readmeContent += `${indent}- [${file}/](${fileLink}/)\n`;
      readmeContent += generateReadme(filePath, level + 1, fileLink);
    } else {
      readmeContent += `${indent}- [${file}](${fileLink})\n`;
    }
  });

  return readmeContent;
}

const readmeContent = `# Estrutura de Pastas e Arquivos\n\n${generateReadme(
  targetDir
)}`;

fs.writeFileSync(
  path.join(targetDir, "directory_structure.md"),
  readmeContent,
  "utf8"
);

console.log("directory_structure.md gerado com sucesso!");
