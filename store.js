let fs = require('fs');
let addKeyValue = (key, value) => {
    let dictionary = {};
    if(fs.existsSync("dictionary.json"))
    {		
        dictionary = JSON.parse(fs.readFileSync("dictionary.json"));
    }
    dictionary[key] = value;
    fs.writeFile("dictionary.json", JSON.stringify(dictionary), (error) => {
        if(error)
        {
            console.log(error);
        }
    });
    console.log(key+" => "+value+' Added To Dictionary'); 
    console.log("\n");       
};
let list = () => {
    let dictionary = {};
    if(fs.existsSync("dictionary.json"))
    {		
        dictionary = JSON.parse(fs.readFileSync("dictionary.json"));
        console.log("\n  Dictionary");
        console.log("*--*--*--*--*")
        for (var key in dictionary) 
        {
            console.log(key + " => " + dictionary[key]);
        }
        console.log("\n");
    }       
};
let action = process.argv[2];
if (action)
{
    if(action == "add")
    {
        if(process.argv[3] && process.argv[4])
        {
            let key = process.argv[3];
            let value = process.argv[4];
            addKeyValue(key, value);
        }
        else console.log("Command is Supposed To Be : add key value");	
    }
    else if(action == "list")
    {
        list();
    }
    else if(action == "get")
    {
        if(process.argv[3])
        {
            let key = process.argv[3];
            getValue(key);
        }
        else console.log("Command is Supposed To Be : get key");	
    }
    else if(action == "remove")
    {
        if(process.argv[3])
        {
            let key = process.argv[3];
            removeValue(key);
        }
        else console.log("Command is Supposed To Be : remove key");
    }
    else if(action == "clear")
    {
        clear();
    }
    else{
		console.log("No Action For The Argument "+action+" .");
	}
}