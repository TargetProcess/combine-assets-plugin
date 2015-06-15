var ConcatSource = require('webpack-core/lib/ConcatSource');

var CombineAssetsPlugin = function(config) {

    config = config || {};

    this.toConcat = config.toConcat || {};
    this.toExclude = config.toExclude || [];
};

CombineAssetsPlugin.prototype.apply = function(compiler) {

    compiler.plugin('emit', function(compilation, next) {

        Object.keys(this.toConcat).map(function(target) {

            var sources = this.toConcat[target];
            var concat = new ConcatSource();

            sources.forEach(function(source) {
                concat.add(compilation.assets[source]);
                concat.add('\n');
            });

            compilation.assets[target] = concat;

        }.bind(this));

        this.toExclude.forEach(function(exclude) {
            delete compilation.assets[exclude];
        });

        next();
    }.bind(this));
};

module.exports = CombineAssetsPlugin;
