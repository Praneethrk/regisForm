$(function(){
    
    $("#btnshow").click(function(){
        
        $.ajax({
            url:"https://restcountries.eu/rest/v2/all",
            methodType:"GET",
            success:function(countryInfo){
                showData(countryInfo);
            },
            error:function(Error)
            {
                alert("Somthing went Worng")
            }
        })
    });
    
    function showData(countryInfo){
        var countryarr= [];
        for(var i=0;i<countryInfo.length;i++){
            var name = countryInfo[i].name;
            var capital = countryInfo[i].capital;
            var code= countryInfo[i].alpha3Code;
            var region = countryInfo[i].region;
            var flag = countryInfo[i].flag;
            
            var country = {
                "name":name,"capital":capital,"code":code,"region":region,"flag":flag
            }
            countryarr.push(country);
            showInfoAsTable(countryInfo);
        }
    }
    
    function showInfoAsTable(countryInfo){
        var data = "";
        if(countryInfo.length == 0)
            data = "<h2 id=head3>No Data Available...</h2>";
        else{
            data +="<table id='countryTable'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>Name</th>";
            data += "<th>Capital</th>";
            data += "<th>code</th>";
            data += "<th>Region</th>";
            data += "<th>flag</th>";
            data += "</tr></thead>";
            
            for(var i=0;i<countryInfo.length;i++){
                var j = i +1 ;
                data += "<tbody><tr>";
                data += "<td>"+j+"</td>";
                data += "<td>"+countryInfo[i].name+"</td>";
                data += "<td>"+countryInfo[i].capital+"</td>";
                data += "<td>"+countryInfo[i].alpha3Code+"</td>";
                data += "<td>"+countryInfo[i].region+"</td>";
                data += "<td><img class='image' src='"+countryInfo[i].flag+"'/></td>";
                data += "</tr>";
            }
            data +="</tbody></table>";
            $("#content").html(data);
            $("#countryTable").dataTable();
        }
    }
});