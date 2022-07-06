
function BonAppeti(bill,k,b){
    
    let totalbill=0
    let finalPrice=0

    for(i=0;i<bill.length;i++){
       totalbill+=bill[i]
       finalPrice=(totalbill-k)/2    
       
    }

    if(finalPrice==b){
        console.log("Borne appeti") 
       }else{
           if(finalPrice<b)
        console.log(parseInt(b-finalPrice))
       }


}
const bill=[3 ,10 ,2 ,9]
 const k=bill[1]
 const b=7
 BonAppeti(bill,k,b)

