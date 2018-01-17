"use strict";

(function ($) {
    $(document).ready(function () {
        if ($(".home-video-popup").length) {
            $(".home-video-popup a").magnificPopup({
                type: 'iframe'
            });
        }
        if ($("#video-gallery").length) {
            $("#video-gallery a.vyoutube > img").each(function (e) {
                var img = $(this);
                var src = img.attr('src');
            });
        }
    });
})(jQuery);
"use strict";

(function ($) {
    $(document).ready(function () {
        if ($(".home-slider").length) {
            $(".home-slider").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                freeDrag: false,
                navText: ["<i class='icon-left-open'></i>", "<i class='icon-right-open'></i>"],
                animateOut: 'fadeOut',
                smartSpeed: 800,
                autoplay: true,
                autoplayTimeout: 7000
            });
        }
        if ($(".testimonials-carousel").length) {
            $(".testimonials-carousel").owlCarousel({
                margin: 50,
                loop: true,
                nav: true,
                navText: ["<i class='icon-left-open'></i>", "<i class='icon-right-open'></i>"],
                smartSpeed: 800,
                autoplay: true,
                autoplayTimeout: 7000,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                freeDrag: false,
                responsive: {
                    1200: {
                        items: 3
                    },
                    768: {
                        items: 2
                    },
                    300: {
                        items: 1
                    }
                }
            });
        }
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNhcm91c2Vscy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxlbmd0aCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwiZWFjaCIsImUiLCJpbWciLCJzcmMiLCJhdHRyIiwialF1ZXJ5Iiwib3dsQ2Fyb3VzZWwiLCJpdGVtcyIsImxvb3AiLCJuYXYiLCJtb3VzZURyYWciLCJ0b3VjaERyYWciLCJwdWxsRHJhZyIsImZyZWVEcmFnIiwibmF2VGV4dCIsImFuaW1hdGVPdXQiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJtYXJnaW4iLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiOztBQUFDLFdBQVVBLENBQVYsRUFBYTtBQUNWQSxNQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixZQUFHRixFQUFFLG1CQUFGLEVBQXVCRyxNQUExQixFQUFrQztBQUM5QkgsY0FBRSxxQkFBRixFQUF5QkksYUFBekIsQ0FBdUM7QUFDbkNDLHNCQUFNO0FBRDZCLGFBQXZDO0FBR0g7QUFDRCxZQUFHTCxFQUFFLGdCQUFGLEVBQW9CRyxNQUF2QixFQUErQjtBQUMzQkgsY0FBRSxpQ0FBRixFQUFxQ00sSUFBckMsQ0FBMkMsVUFBU0MsQ0FBVCxFQUFZO0FBQ25ELG9CQUFJQyxNQUFNUixFQUFFLElBQUYsQ0FBVjtBQUNBLG9CQUFJUyxNQUFNRCxJQUFJRSxJQUFKLENBQVMsS0FBVCxDQUFWO0FBQ0gsYUFIRDtBQUlIO0FBQ0osS0FaRDtBQWFILENBZEEsRUFjQ0MsTUFkRCxDQUFEOzs7QUNBQyxXQUFVWCxDQUFWLEVBQWE7QUFDVkEsTUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsWUFBSUYsRUFBRSxjQUFGLEVBQWtCRyxNQUF0QixFQUE4QjtBQUMxQkgsY0FBRSxjQUFGLEVBQWtCWSxXQUFsQixDQUE4QjtBQUMxQkMsdUJBQU8sQ0FEbUI7QUFFMUJDLHNCQUFNLElBRm9CO0FBRzFCQyxxQkFBSyxJQUhxQjtBQUkxQkMsMkJBQVcsS0FKZTtBQUsxQkMsMkJBQVcsS0FMZTtBQU0xQkMsMEJBQVUsS0FOZ0I7QUFPMUJDLDBCQUFVLEtBUGdCO0FBUTFCQyx5QkFBUyxDQUFDLGdDQUFELEVBQW1DLGlDQUFuQyxDQVJpQjtBQVMxQkMsNEJBQVksU0FUYztBQVUxQkMsNEJBQVksR0FWYztBQVcxQkMsMEJBQVUsSUFYZ0I7QUFZMUJDLGlDQUFpQjtBQVpTLGFBQTlCO0FBY0g7QUFDRCxZQUFJeEIsRUFBRSx3QkFBRixFQUE0QkcsTUFBaEMsRUFBd0M7QUFDcENILGNBQUUsd0JBQUYsRUFBNEJZLFdBQTVCLENBQXdDO0FBQ3BDYSx3QkFBUSxFQUQ0QjtBQUVwQ1gsc0JBQU0sSUFGOEI7QUFHcENDLHFCQUFLLElBSCtCO0FBSXBDSyx5QkFBUyxDQUFDLGdDQUFELEVBQW1DLGlDQUFuQyxDQUoyQjtBQUtwQ0UsNEJBQVksR0FMd0I7QUFNcENDLDBCQUFVLElBTjBCO0FBT3BDQyxpQ0FBaUIsSUFQbUI7QUFRcENSLDJCQUFXLEtBUnlCO0FBU3BDQywyQkFBVyxLQVR5QjtBQVVwQ0MsMEJBQVUsS0FWMEI7QUFXcENDLDBCQUFVLEtBWDBCO0FBWXBDTyw0QkFBWTtBQUNSLDBCQUFNO0FBQ0ZiLCtCQUFPO0FBREwscUJBREU7QUFJUix5QkFBSztBQUNEQSwrQkFBTztBQUROLHFCQUpHO0FBT1IseUJBQUs7QUFDREEsK0JBQU87QUFETjtBQVBHO0FBWndCLGFBQXhDO0FBd0JIO0FBQ0osS0EzQ0Q7QUE0Q0gsQ0E3Q0EsRUE2Q0NGLE1BN0NELENBQUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJChcIi5ob21lLXZpZGVvLXBvcHVwXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKFwiLmhvbWUtdmlkZW8tcG9wdXAgYVwiKS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZpZGVvLWdhbGxlcnlcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoXCIjdmlkZW8tZ2FsbGVyeSBhLnZ5b3V0dWJlID4gaW1nXCIpLmVhY2goIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWcgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9IGltZy5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIi5ob21lLXNsaWRlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChcIi5ob21lLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHB1bGxEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZyZWVEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdpY29uLWxlZnQtb3Blbic+PC9pPlwiLCBcIjxpIGNsYXNzPSdpY29uLXJpZ2h0LW9wZW4nPjwvaT5cIl0sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgICAgICAgICBzbWFydFNwZWVkOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNzAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoXCIudGVzdGltb25pYWxzLWNhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFscy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUwLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdpY29uLWxlZnQtb3Blbic+PC9pPlwiLCBcIjxpIGNsYXNzPSdpY29uLXJpZ2h0LW9wZW4nPjwvaT5cIl0sXHJcbiAgICAgICAgICAgICAgICBzbWFydFNwZWVkOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNzAwMCxcclxuICAgICAgICAgICAgICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3VjaERyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHVsbERyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZnJlZURyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufShqUXVlcnkpKTsiXX0=
