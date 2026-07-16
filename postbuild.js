import fs from "fs";
import path from "path";

const shellPath = path.join("dist", "client", "_shell.html");
const indexPath = path.join("dist", "client", "index.html");

try {
  if (!fs.existsSync(shellPath)) {
    console.error("Error: _shell.html does not exist in dist/client/");
    process.exit(1);
  }

  let htmlContent = fs.readFileSync(shellPath, "utf8");

  // Replace absolute /assets/ paths with relative ./assets/ paths
  // This resolves MIME issues when site is loaded in subfolders/subdomains
  htmlContent = htmlContent.replaceAll('"/assets/', '"./assets/');
  htmlContent = htmlContent.replaceAll('"/./assets/', '"./assets/');

  fs.writeFileSync(indexPath, htmlContent, "utf8");
  console.log("Successfully generated index.html with relative asset paths!");

  // Optionally remove the shell file
  fs.unlinkSync(shellPath);
  console.log("Cleaned up _shell.html.");
} catch (error) {
  console.error("Error running postbuild:", error);
  process.exit(1);
}
