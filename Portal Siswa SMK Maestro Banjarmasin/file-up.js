$('#file-up').on('change', function() { 
    var fileName = $(this).val().split('\\').pop(); 
    $(this).next('.custom-file-label').html(fileName); 
});