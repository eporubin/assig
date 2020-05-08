//Object which store the info about contracts
const contracts = [
    {name:"iPhone XS", brand:"Apple", cost:"43", data:"500MB", minutes:"Unlimited", text:"Unlimited"},
    {name:"iPhone 11", brand:"Apple", cost:"64", data:"90GB", minutes:"Unlimited", text:"Unlimited"},
    {name:"Galaxy S10", brand:"Samsung", cost:"30", data:"20GB", minutes:"Unlimited", text:"Unlimited"},
    {name:"Galaxy S10", brand:"Samsung", cost:"65", data:"unlimited", minutes:"Unlimited", text:"Unlimited"},
    {name:"Galaxy A10", brand:"Samsung", cost:"11.99", data:"500MB", minutes:"250", text:"Unlimited"},
    {name:"Galaxy S9", brand:"Samsung", cost:"31", data:"20GB", minutes:"Unlimited", text:"Unlimited"},
    {name:"StarTAC", brand:"Motorola", cost:"3", data:"0GB", minutes:"200", text:"500"},
    {name:"Pixel 3A", brand:"Google", cost:"23", data:"4GB", minutes:"Unlimited", text:"Unlimited"},
    {name:"Xperia 10", brand:"Sony", cost:"30", data:"20GB", minutes:"Unlimited", text:"Unlimited"},
    {name:"P30", brand:"Huawei", cost:"27.99", data:"500MB", minutes:"500", text:"Unlimited"}

];

//user enter the preferences
    const userChoice = prompt("Please enter a brand");
    const monthlyCost = prompt("Please enter a maximum monthly cost in £s");
    const dataAns = prompt("Please enter a minimum data allowence in GB");
    const minutesAns = prompt("Please enter a minimum number of talking minutes");
    const textAns = prompt("Please enter a minimum text allowence");
    
//the function will filter the object (up lines) and compare the contend from user (introduced in promt) 
//&& means and - will make sure is a match from all categories
    const matContracts = contracts.filter(function(contract){
        if(contract.brand === userChoice && contract.cost === monthlyCost
            && contract.data === dataAns && contract.minutes === minutesAns 
             && contract.text === textAns){
            return true;
            }
            return false;
        });
 ///print the result on the html page with the link #result from html page   
        const printResult = document.querySelector("#result");//get hold of the div from the page
        if(matContracts.length>0){
            matContracts.forEach(function(contract){
                const newParagraph = document.createElement("p");//create a <p> element
                newParagraph.textContent = `${contract.brand}  ${contract.name} - ${contract.cost} is your match. `;
                printResult.appendChild(newParagraph);//insert the <p> into the fragment
            });
        } else{
            printResult.textContent = `no suitable contracts for you`;
        }
      


      