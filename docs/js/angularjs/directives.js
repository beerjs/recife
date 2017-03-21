app.directive('materialBoxMaterialize', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $('.beer-gallery__img').materialbox();
            $('.beer-gallery__img').click(function() {
                $('.beer-box-2').addClass('primary-layer--reset');
            });
            $('#materialbox-overlay').click(function() {
                $('.beer-box-2').removeClass('primary-layer--reset');
            });
        }
    };
})