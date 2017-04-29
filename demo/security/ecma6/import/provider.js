import {ecma6Interface} from "ecma6Interface";

let providerInterface = new ecma6Interface(
    {
        getUserName:[{'id':'Int'}] 
    }
);
export let provider = class  {
    constructor(a,b,c) {
       providerInterface.check(this);
    }
    getUserName(){}
}