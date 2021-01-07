$(document).ready(function() {
    $("#form-referal button").on("click", function() {
        event.preventDefault();
        var name = $('#defaultReferalName').val()
        var motivation = $('#defaultReferalMotivation').val()
        var relationship = $('#defaultReferalRelationship').val()
        var period = $('#defaultReferalPeriod').val()
        var newsletter = $('#defaultReferalNewsletter').val()


        localStorage.setItem("name", name);
        localStorage.setItem("motivation", motivation);
        localStorage.setItem("relationship", relationship);
        localStorage.setItem("period", period);
        localStorage.setItem("newsletter", newsletter);

        window.location.replace("/html/form.html")
    })

    $('[data-toggle="tooltip"]').tooltip()

    $('#start-button').on('click', function() {
        $('#defaultReferalPeriod').focus()
    })
});