function getthething()
{
    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("para1_input_box_"+ i).value);
        inputs.join(". ");


    }
    document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
    

} 


var inputs=[];

function getthething2()
{
    for(var i = 1; i <=6; i++)
    {
        inputs2.push(document.getElementById("para2_input_box_"+ i).value);
        inputs2.join(". ");


    }
    document.getElementById("showparagraph2").innerHTML = inputs2.join(". ");
    

}

var inputs2=[];
