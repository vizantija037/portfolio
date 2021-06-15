
import shutters from "../src/images/shutters.png";
import escape from "../src/images/escape.png";
import textcheck from "../src/images/textcheck.png";
import expenses from "../src/images/expenses.png";

const projects = [
    {
        key: "1",
        heading: "SHUTTER WIZARD",
        image: shutters,
        description: "Description : responsive  webDesign ",
        technology: "Technology : HTML / CSS / JS",
        task: "Main Task : convert PSD to HTML",
        address: "//vizantija037.github.io/shutter/Index.html",
      },
      {
        key: "2",
        heading: "ESCAPE DESIGN",
        image: escape,
        description: "Description : responsive  webDesign ",
        technology: "Technology : HTML / CSS / JS",
        task: "Main Task : convert PSD to HTML",
        address:"//vizantija037.github.io/responsive-escape/"
      },
      {
        key: "3",
        heading: "TEXT CHECKER",
        image: textcheck,
        description: "Description: Typing,Fonts, Word Count ",
        technology: "Technology : HTML / CSS / JS",
        task: "Main Task : Count words/characters, Find...",
        address:"//vizantija037.github.io/Text-Checker/"
      },
      {
        key: "4",
        heading: "EXPENSES LIST",
        image: expenses,
        description: "Description : Create of the expenses list",
        technology: "Technology : HTML / CSS / JS",
        task: "Main Task : Add and remove expenses",
        address:"//vizantija037.github.io/Expenses/"
      },
] 

function ProjectsData () {
    return projects;
}
export default ProjectsData;