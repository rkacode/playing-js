require(["jquery", "ko"], function($, ko) {

    var indexViewModel = function() {
        var self = this;

        self.header = ko.observable('Header from knockout');
    };

    ko.applyBindings(indexViewModel);

    $(function () {
        $("#header").text('Header from jquery');
    });
});