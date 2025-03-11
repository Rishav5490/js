//2. Function as Expression:- First Class Function

const dialog=function (name)
            {
                if(name==="salmon")
                {
                    console.log("Swagat to karo hamara")
                }                
                else if(name==="uday")
                {
                    console.log("Control majnu control")
                }                
                else{
                    console.log("Gadarri karbee..!!")
                }
                return `Jaldi yaha se hato..!!`
            }

const res=dialog("srk")
console.log(res)