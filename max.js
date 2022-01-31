const businessMan = 500;
const minister = 400;
const army = 600;

if(businessMan > minister && businessMan > army){
    console.log('businessman is bigger ');
}
else if(minister > businessMan && businessMan > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
}