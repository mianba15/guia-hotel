$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $("[data-toggle='popover']").popover({ trigger: "hover" });
    $(".carousel").carousel({
        interval: 5000
    });
    $("#exampleContacto").on('show.bs.modal', function (e) {
        console.log('El modal se está mostrando');

        $('#contactoBtn').removeClass('btn-outline-sucess');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);

    });
    $("#exampleContacto").on('shown.bs.modal', function (e) {
        console.log('El modal se mostró');
    });
    $("#exampleContacto").on('hide.bs.modal', function (e) {
        console.log('El modal se oculta');
    });
    $("#exampleContacto").on('hidden.bs.modal', function (e) {
        console.log('El modal se ocultó');
    })
});