var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '.././base_component/JQElement'], function(require, exports, jqE) {
    var jqProgress = (function (_super) {
        __extends(jqProgress, _super);
        function jqProgress(_jqProgressBar) {
            _super.call(this, 'jqProgress');

            this.progressBarList = new jqE.jqList(this);

            this.add(_jqProgressBar);

            this.init();
            _jqProgressBar = null;
        }
        jqProgress.prototype.init = function () {
            this.addClass(jqProgressBarConst.PROGRESS);
        };

        jqProgress.prototype.create = function (_id) {
            _id.appendChild(this.getHtml());
            _id = null;
            this.start();
        };

        jqProgress.prototype.start = function () {
            var _lenght = this.progressBarList.length;

            if (_lenght > 1) {
                for (var i = _lenght - 1; i >= 0; i--) {
                    var _tmpProgressBar = this.progressBarList.getItem(i);
                    _tmpProgressBar.start();
                    _tmpProgressBar = null;
                }
            } else {
                this.progressBarList.getFirst().start();
            }

            _lenght = null;
        };

        jqProgress.prototype.add = function (_jqProgressBar) {
            this.progressBarList.add(_jqProgressBar);
        };

        jqProgress.prototype.isStaked = function () {
            return this.progressBarList.length > 1;
        };

        jqProgress.prototype.getProgressBarList = function () {
            return this.progressBarList;
        };

        jqProgress.prototype.setProgressBarList = function (_progressBar) {
            this.progressBarList = _progressBar;
            _progressBar = null;
        };

        jqProgress.prototype.getHtml = function () {
            return this.toHtml();
        };

        jqProgress.prototype.finalize = function () {
            this.progressBarList.destroy();
            this.progressBarList = null;
            this.expire();
        };
        return jqProgress;
    })(jqE.div);
    exports.jqProgress = jqProgress;

    var jqProgressBar = (function (_super) {
        __extends(jqProgressBar, _super);
        function jqProgressBar(_valueNow, _label) {
            _super.call(this, 'jqProgressBar');

            this.content = new jqE.span('jqContent');
            this.content.setInnerHtml(_label);
            this.contentLegend = new jqE.span('jqContentLegend');

            this.loadedAnimated = true;
            this.showLabel = true;
            this.legend = true;

            this.valueMin = 0;
            this.valueMax = 100;
            this.valueMilliSeconds = 105;
            this.setValueNow(_valueNow);

            this.init();

            _label = _valueNow = null;
        }
        jqProgressBar.prototype.init = function () {
            this.addClass(jqProgressBarConst.PROGRESS_BAR);
            this.addClass(jqE.jqStyle.JQ_FILL_LEFT_IN);

            if (!this.isShowLabel()) {
                this.content.addClass(jqProgressBarConst.SR_ONLY);
            }

            if (!this.isLegend()) {
                this.contentLegend.addClass(jqProgressBarConst.SR_ONLY);
            }

            this.contentLegend.getStyle().marginLeft = '0.5%';
            this.contentLegend.setInnerHtml(this.valueNow + '%');

            this.appendElement(this.content);
            this.appendElement(this.contentLegend);
        };

        jqProgressBar.prototype.create = function (_id) {
            _id.appendChild(this.getHtml());
            _id = null;

            if (this.isLoadedAnimated()) {
                this.start();
            } else {
                this.setCssWidth(this.valueNow + '%');
            }
        };

        jqProgressBar.prototype.start = function () {
            var _this = this;
            if (this.isLoadedAnimated()) {
                window.setTimeout(function () {
                    _this.setCssWidth(_this.valueNow + '%');
                }, this.valueMilliSeconds);
            } else {
                this.setCssWidth(this.valueNow + '%');
            }
        };

        jqProgressBar.prototype.clear = function () {
            this.setCssWidth('0%');
        };

        jqProgressBar.prototype.isRangeValid = function (_value) {
            return _value >= this.valueMin && _value <= this.valueMax;
        };
        jqProgressBar.prototype.getContent = function () {
            return this.content;
        };

        jqProgressBar.prototype.setContent = function (_content) {
            this.content = _content;
            _content = null;
        };

        jqProgressBar.prototype.isLoadedAnimated = function () {
            return this.loadedAnimated;
        };

        jqProgressBar.prototype.setLoadedAnimated = function (_loadedAnimated) {
            this.loadedAnimated = _loadedAnimated;
            _loadedAnimated = null;
        };

        jqProgressBar.prototype.getValueNow = function () {
            return this.valueNow;
        };

        jqProgressBar.prototype.setValueNow = function (_valueNow) {
            if (this.isRangeValid(_valueNow)) {
                if (this.isLoadedAnimated()) {
                    this.valueNow = _valueNow;
                } else {
                    this.valueNow = _valueNow;
                    this.setCssWidth(this.valueNow + '%');
                }
            } else {
                throw new Error('El valor especificado esta fuera del rango permitido !');
            }
            _valueNow = null;
        };

        jqProgressBar.prototype.getValueMin = function () {
            return this.valueMin;
        };

        jqProgressBar.prototype.setValueMin = function (_valueMin) {
            this.valueMin = _valueMin;
            _valueMin = null;
        };

        jqProgressBar.prototype.getValueMax = function () {
            return this.valueMax;
        };

        jqProgressBar.prototype.setValueMax = function (_valueMax) {
            this.valueMax = _valueMax;
            _valueMax = null;
        };

        jqProgressBar.prototype.getValueMilliSeconds = function () {
            return this.valueMilliSeconds;
        };

        jqProgressBar.prototype.setValueMilliSeconds = function (_milliSeconds) {
            this.valueMilliSeconds = _milliSeconds;
        };

        jqProgressBar.prototype.isShowLabel = function () {
            return this.showLabel;
        };

        jqProgressBar.prototype.setShowLabel = function (_showLabel) {
            this.showLabel = _showLabel;
            if (!this.showLabel) {
                this.content.addClass(jqProgressBarConst.SR_ONLY);
            }
            _showLabel = null;
        };

        jqProgressBar.prototype.isLegend = function () {
            return this.legend;
        };

        jqProgressBar.prototype.setLegend = function (_legend) {
            this.legend = _legend;
            if (!this.legend) {
                this.contentLegend.addClass(jqProgressBarConst.SR_ONLY);
            }
            _legend = null;
        };

        jqProgressBar.prototype.getContentLegend = function () {
            return this.contentLegend;
        };

        jqProgressBar.prototype.isContentLegend = function (_contentLegend) {
            this.contentLegend = _contentLegend;
            _contentLegend = null;
        };

        jqProgressBar.prototype.getHtml = function () {
            return this.toHtml();
        };

        jqProgressBar.prototype.finalize = function () {
            this.loadedAnimated = null;
            this.showLabel = null;
            this.valueNow = null;
            this.valueMin = null;
            this.valueMax = null;
            this.valueMilliSeconds = null;
            this.content.expire();
            this.contentLegend.expire();
            this.content = null;
            this.contentLegend = null;
            this.expire();
        };
        return jqProgressBar;
    })(jqE.div);
    exports.jqProgressBar = jqProgressBar;

    var jqProgressBarSuccess = (function (_super) {
        __extends(jqProgressBarSuccess, _super);
        function jqProgressBarSuccess(_valueNow, _label) {
            _super.call(this, _valueNow, _label);
            _valueNow = _label = null;
            this.addClass(jqProgressBarConst.PROGRESS_BAR_SUCCESS);
        }
        return jqProgressBarSuccess;
    })(jqProgressBar);
    exports.jqProgressBarSuccess = jqProgressBarSuccess;

    var jqProgressBarInfo = (function (_super) {
        __extends(jqProgressBarInfo, _super);
        function jqProgressBarInfo(_valueNow, _label) {
            _super.call(this, _valueNow, _label);
            _valueNow = _label = null;
            this.addClass(jqProgressBarConst.PROGRESS_BAR_INFO);
        }
        return jqProgressBarInfo;
    })(jqProgressBar);
    exports.jqProgressBarInfo = jqProgressBarInfo;

    var jqProgressBarWarning = (function (_super) {
        __extends(jqProgressBarWarning, _super);
        function jqProgressBarWarning(_valueNow, _label) {
            _super.call(this, _valueNow, _label);
            _valueNow = _label = null;
            this.addClass(jqProgressBarConst.PROGRESS_BAR_WARNING);
        }
        return jqProgressBarWarning;
    })(jqProgressBar);
    exports.jqProgressBarWarning = jqProgressBarWarning;

    var jqProgressBarDanger = (function (_super) {
        __extends(jqProgressBarDanger, _super);
        function jqProgressBarDanger(_valueNow, _label) {
            _super.call(this, _valueNow, _label);
            _valueNow = _label = null;
            this.addClass(jqProgressBarConst.PROGRESS_BAR_DANGER);
        }
        return jqProgressBarDanger;
    })(jqProgressBar);
    exports.jqProgressBarDanger = jqProgressBarDanger;

    var jqProgressStriped = (function (_super) {
        __extends(jqProgressStriped, _super);
        function jqProgressStriped(_jqProgressBar) {
            _super.call(this, _jqProgressBar);
            _jqProgressBar;
            this.addClass(jqProgressBarConst.PROGRESS_STRIPED);
            this.setAnimated(false);
        }
        jqProgressStriped.prototype.isAnimated = function () {
            return this.animated;
        };

        jqProgressStriped.prototype.setAnimated = function (_animated) {
            this.animated = _animated;
            if (this.isAnimated()) {
                this.addClass(jqProgressBarConst.ACTIVE);
            } else {
                this.removeClass(jqProgressBarConst.ACTIVE);
            }
        };
        return jqProgressStriped;
    })(jqProgress);
    exports.jqProgressStriped = jqProgressStriped;

    var jqProgressBarConst = (function () {
        function jqProgressBarConst() {
        }
        jqProgressBarConst.PROGRESS = 'progress';
        jqProgressBarConst.PROGRESS_BAR = 'progress-bar';
        jqProgressBarConst.SR_ONLY = 'sr-only';
        jqProgressBarConst.PROGRESS_BAR_SUCCESS = 'progress-bar-success';
        jqProgressBarConst.PROGRESS_BAR_INFO = 'progress-bar-info';
        jqProgressBarConst.PROGRESS_BAR_WARNING = 'progress-bar-warning';
        jqProgressBarConst.PROGRESS_BAR_DANGER = 'progress-bar-danger';
        jqProgressBarConst.PROGRESS_STRIPED = 'progress-striped';
        jqProgressBarConst.ACTIVE = "active";
        return jqProgressBarConst;
    })();
    exports.jqProgressBarConst = jqProgressBarConst;
});
