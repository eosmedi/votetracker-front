/*=========================================================================================
    File Name: datatables-responsive.js
    Description: Responsive Datatable
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
//    reloadTables();
});

function reloadTables(){

    if( $('.dataex-res-constructor').hasClass('dataTable')){
    //     var dttable = $('.dataex-res-constructor').dataTable();
    //     if(dttable){
    //         dttable.fnClearTable(); //清空一下table
    // 　　    dttable.fnDestroy(); //还原初始化了的datatable
    //     }

    }else{
        $('.dataex-res-constructor').DataTable({
            "destroy": true,
            searching: false,
            responsive: true,
            paging: false
        });
    
    }


    


    console.log('reloadTables');
    /********************************
     *       `new` constructor       *
     ********************************/
    // var tableConstructor = $('.dataex-res-constructor').DataTable({
    //     "paging": false
    // });

    // new $.fn.dataTable.Responsive(tableConstructor);

}