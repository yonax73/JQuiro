define(["require", "exports"], function(require, exports) {
    var utils = (function () {
        function utils() {
        }
        utils.getId = function (_id) {
            return document.getElementById(_id);
        };

        utils.downloadFile = function (_blob, _nameFile) {
            var reader = new FileReader();

            reader.onload = function (evt) {
                var save = document.createElement('a');
                save.href = evt.target.result;
                save.target = '_blank';
                save.download = _nameFile || 'jqFile.dat';

                var click = document.createEvent('MouseEvent');
                click.initEvent('click', true, true);

                save.dispatchEvent(click);
            };

            reader.readAsDataURL(_blob);
        };
        return utils;
    })();
    exports.utils = utils;
});
