#! /usr/bin/env node

let disp=require("./commands/display");
let add_number=require("./commands/-n");
let add=require("./commands/-b");
let remo=require("./commands/-s");
let copy=require("./commands/copy")
let append=require("./commands/append");
let remove_and_copy=require("./commands/remove_large_spaces_and_save_in_file2");
let help=require("./commands/help");
let input=process.argv.slice(2);
let inp=input[0];

//switch statment
let str;
switch(inp){
    case "help":
        help.helpfn();    
    break
    case "-s":
         str=input[1].toString().split(" ");
        if(str.length>1){
            remove_and_copy.remove_spaces_and_save(str[0],str[2]);
        }
       else   
            remo.remove_spaces(input[1])
        break;
    case "-n":
        if(input[1]=="-b"){
            add_number.add_no(input[2]);
        }else add_number.add_no(input[1]);
        break;
    case "-b":
        add.add_number_not_to_space(input[1]);
        break;
    default:
         str=input.toString().split(" ");
        if(str[1]==">"){
         copy.copy(str[0],str[2]);    
    }else if(str[1]==">>"){
         append.Append(str[0],str[2]);
        }
        else disp.display(str);
        break;
}