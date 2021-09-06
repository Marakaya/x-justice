// Create Countdown
var Countdown = {

    // Backbone-like structure
    $el: $('.countdown'),

    // Params
    countdown_interval: null,
    total_seconds     : 0,

    // Initialize the countdown
    init: function() {

        // DOM
        this.$ = {
            days  : this.$el.find('.bloc-time.days .figure'),
            hours  : this.$el.find('.bloc-time.hours .figure'),
            minutes: this.$el.find('.bloc-time.min .figure'),
            seconds: this.$el.find('.bloc-time.sec .figure')
        };

        // Init countdown values
        this.values = {
            days  : this.$.days.parent().attr('data-init-value'),
            hours  : this.$.hours.parent().attr('data-init-value'),
            minutes: this.$.minutes.parent().attr('data-init-value'),
            seconds: this.$.seconds.parent().attr('data-init-value'),
        };

        // Initialize total seconds
        this.total_seconds =this.values.days * 60 * 60 * 24 + this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

        // Animate countdown to the end
        this.count();
    },

    count: function() {

        var that    = this,
            $day_1 = this.$.days.eq(0),
            $hour_1 = this.$.hours.eq(0),
            $min_1  = this.$.minutes.eq(0),
            $sec_1  = this.$.seconds.eq(0);

        this.countdown_interval = setInterval(function() {

            if(that.total_seconds > 0) {

                --that.values.seconds;

                if(that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if(that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                if(that.values.days >= 0 && that.values.hours < 0) {

                    that.values.hours = 23;
                    --that.values.days;
                }

                // Update DOM values
                // Hours
                that.checkHour(that.values.days, $day_1);

                // Hours
                that.checkHour(that.values.hours, $hour_1);

                // Minutes
                that.checkHour(that.values.minutes, $min_1);

                // Seconds
                that.checkHour(that.values.seconds, $sec_1);

                --that.total_seconds;
            }
            else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);
    },

    animateFigure: function($el, value) {

        var that         = this,
            $top         = $el.find('.top'),
            $bottom      = $el.find('.bottom'),
            $back_top    = $el.find('.top-back'),
            $back_bottom = $el.find('.bottom-back');

        // Before we begin, change the back value
        $back_top.find('span').html(value);

        // Also change the back bottom value
        $back_bottom.find('span').html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
            rotationX           : '-180deg',
            transformPerspective: 300,
            ease                : Quart.easeOut,
            onComplete          : function() {

                $top.html(value);

                $bottom.html(value);

                TweenMax.set($top, { rotationX: 0 });
            }
        });

        TweenMax.to($back_top, 0.8, {
            rotationX           : 0,
            transformPerspective: 300,
            ease                : Quart.easeOut,
            clearProps          : 'all'
        });
    },

    checkHour: function(value, $el_1) {

        var val_1       = value.toString(),
            fig_1_value = $el_1.find('.top').html();


            // Animate only if the figure has changed
        if(val_1 < 10){
            var str = "0"+val_1;
            if(fig_1_value !==  str){
                this.animateFigure($el_1, "0"+val_1);
            }
        }else{
            if(fig_1_value !== val_1){
                this.animateFigure($el_1, val_1);
            }
        }



    }
};

// Let's go !
Countdown.init();