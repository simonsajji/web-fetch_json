let r= fetch('https://reqres.in/api/user');
let d=r.then(function(response){

    return response.json();

});

d.then(function(a){

    display_head(a.data);
    display_content(a.data);

});

function display_head(data){

    console.log(data[0]);
    Object.keys(data[0]).forEach(function(item){
    let th=document.createElement('th');
    let thead=document.querySelector('thead');
    thead.appendChild(th);
    th.innerHTML=item;
    });
   

}
function display_content(data){

    data.forEach(function(element){
        var tr=document.createElement('tr');
        
        
        var tbody=document.querySelector('tbody');
        tbody.appendChild(tr);

        

        // We need to apply color to each tr 

        tr.style.backgroundColor=element.color;
        
        Object.values(element).forEach(function(cont){
           

            var td=document.createElement('td');
            tr.appendChild(td);
            td.innerHTML=cont;

            


        });
        

        
       

    });
    
}





   
