var members=["Karan Sharma-Father","Anisha Sharma-Mother","Arush Sharma-Me","Rakesh Kumar Sharma-Paternal Grandad","Tapodhani Sharma-Paternal Grandmother","Swetha Sharma-Aunt","Naveen Sharma-Uncle","Krisha Sharma-Sister","Great Grand Parents",""];
var images=["Karan copy.png","Anisha copy.jpeg","My pic copy 2.png","Rakesh copy.png","Tapodhani copy.jpeg","Cheena copy.png","Phupha.jpg","Krisha copy.png","GREAT GRAND PARENTS.png"];
var i=0;
function nextMember()
{
    document.getElementById("firstH5").innerHTML=members[i];
    document.getElementById("firstImage").src=images[i];
    i++;
    if(i>8)
    {
        i=0;
    }
}