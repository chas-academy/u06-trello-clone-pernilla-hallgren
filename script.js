$(() => {

    // DIALOG - To-do
    $('#info-dialogbox-one').dialog({
        autoOpen: false,
        title: 'Information - To Do',
        closeOnEscape: false,
        show: {
            effect: 'slide',
            duration: 500
        },
        hide: {
            effect: 'fade',
            duration: 400
        },
        buttons: {
            close: function() {$(this).dialog('close');}
        },
    });
    $('.info-1').on('click', function() {
        $('#info-dialogbox-one').dialog('open');
    });

    // DIALOG - Working On
    $('#info-dialogbox-two').dialog({
        autoOpen: false,
        title: 'Information - Working On',
        closeOnEscape: false,
        show: {
            effect: 'slide',
            duration: 500
        },
        hide: {
            effect: 'fade',
            duration: 400
        },
        buttons: {
            close: function() {$(this).dialog('close');}
        },
    });
    $('.info-2').on('click', function() {
        $('#info-dialogbox-two').dialog('open');
    });

    // DIALOG - Fix
    $('#info-dialogbox-three').dialog({
        autoOpen: false,
        title: 'Information - Fix',
        closeOnEscape: false,
        show: {
            effect: 'slide',
            duration: 500
        },
        hide: {
            effect: 'fade',
            duration: 400
        },
        buttons: {
            close: function() {$(this).dialog('close');}
        },
    });
    $('.info-3').on('click', function() {
        $('#info-dialogbox-three').dialog('open');
    });    

    // DIALOG - Done
    $('#info-dialogbox-four').dialog({
        autoOpen: false,
        title: 'Information - Done',
        closeOnEscape: false,
        show: {
            effect: 'slide',
            duration: 500
        },
        hide: {
            effect: 'fade',
            duration: 400
        },
        buttons: {
            close: function() {$(this).dialog('close');}
        },
    });
    $('.info-4').on('click', function() {
        $('#info-dialogbox-four').dialog('open');
    });    
    
    // SORTABLE - Move the cards between columns 
    $('.card').sortable({
        connectWith: '.card',
        items: '.card-body',
        placeholder: 'card-body-placeholder'   
    });

        // TABS
    $('.tabs-section').tabs({
        show: 300, hide: 300
    });
   

    // DATEPICKER - Set datepicker on the card + animation
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',  
        showAnim: 'fade'  
    });

    // Checked boxes 
    $('.form-check-label').on('click', function(){
        $(this).toggleClass('strike');
        $(this).animate({
            opacity: '0.5',
            easing: "easein"
        });
    });

        //WIDGET - change color on btn
    $.widget('custom.color', {
        //setting for the widget
        options: {
            text: 'Normal',
        },

        // logic
        _create: function() {
            // Options are already merged and stored in this.options
            const text = this.options.text;

            this.element
                .text(text)
                .on('click', function() {
                    $(this).toggleClass('btn-red')
                    $(this).text($(this).text() == 'Normal' ? 'Urgent' : 'Normal');
                });              
        },
    });
    $('.pressed').color();



});