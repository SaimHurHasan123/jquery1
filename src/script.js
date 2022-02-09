prodData = [];
$(document).ready(function () {
    $("#update_product").hide();
    $(".success").hide();
    $(".error").hide();
    $("#add_product").click(function () {
        let obj = {};
        obj.id = $("#product_sku").val();
        obj.name = $("#product_name").val();
        obj.price = $("#product_price").val();
        obj.quant = $("#product_quantity").val();
        for (var i = 0; i < prodData.length; i++) {
            if (prodData[i].id == obj.id) {
                $(".error").show();
                $(".success").hide();
                console.log("Please enter correct value");
                return;
            }
        }
        prodData.push(obj);
        $(".error").hide();
        $(".success").show();
        disp(prodData);
    })
    $(document).on('click','#add_product',function(){
        $("#add_product").val("Add Product");
    })    
$(document).on('click','.edit', function(){
    $("#add_product").val("Upadte Product");
    
    var edit1 = $(this).parent("td").siblings("#id").html();
    $("#product_id").val($(this).val.parent("td").siblings("#id").html());
    $("#product_name").val($(this).val.parent("td").siblings("#name").html());
    $("#product_price").val($(this).val.parent("td").siblings("#price").html());
    $("#product_quantity").val($(this).val.parent("td").siblings("#quant").html());

    
})
   
    $(document).on('click','.delete',function(){
        var d1=$(this).parent("td").siblings("#id").html();
        remove(d1);


    })   


});
function remove(data){
    newArray=[];
    for(var i=0;i<prodData.length;i++){
    if(prodData[i].id!=data){
        newArray.push(prodData[i]);
    }
    }
    prodData=newArray;
    disp(prodData);
    }


function disp(prodData) {
    $("#result").html(" ");
    for (var i = 0; i < prodData.length; i++) {
        var str = `<tr><td id="id">${prodData[i].id}</td><td id="name">${prodData[i].name}</td><td id="price">${prodData[i].price}</td><td id="quant">${prodData[i].quant}</td><td><a href="#" class="edit">Edit</a><a href="#" class="delete">Delete</a></td></tr>`;
         $("#result").html($("#result").html()+str);

    }
}