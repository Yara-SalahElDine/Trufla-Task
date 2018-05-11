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