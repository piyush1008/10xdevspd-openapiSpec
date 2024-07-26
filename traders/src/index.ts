import { DefaultService } from "./generated";



const main=async()=>{
    const getuser=await DefaultService.getUsers("1212");
    console.log(getuser)

}
 
main();

