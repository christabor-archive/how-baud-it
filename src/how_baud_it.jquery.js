/*
* How Baud It? Load your images the old school way, with slow modem simulation and everything!
* (c) 2013 Chris Tabor <dxdstudio@gmail.com>
* See license for information
* <3
* DEMO: http://christabor.github.io/how-baud-it
* GITHUB: https://github.com/christabor/how-baud-it
*/

;(function($){
    $.fn.howBaudIt = function(options) {
        var defaults = {
            load_speed: 1000,
            increment_amount: 40
        },
        opts = $.extend(defaults, options);
        this.each(function(k, img){
            var _img = $(img),
            loadedImg,
            final_height,
            cover;

        // get the final height to detract from
        final_height = _img.attr('height') || _img.height(),
        final_width  = _img.attr('width')  || _img.width(),
        offset = _img.offset();

        cover = $('<div>')
        .height(final_height)
        .width(final_width).css({
            'top': offset.top,
            'left': offset.left,
            'position': 'absolute',
            'background-color': 'white',
            'z-index': '99'
        });

        // add cover to image
        _img.before(cover);

        function updateHeight() {
            // Clear interval when the height reaches it's maximum
            if(cover.height() === 0) {
                clearInterval(loadedImg);
                cover.remove();
                return;
            }
            cover.height(cover.height() - opts.increment_amount);
            return;
        }

        // set an interval to run on the image, "loading" it in
        loadedImg = setInterval(updateHeight, opts.load_speed);
    });
};
})(jQuery);
