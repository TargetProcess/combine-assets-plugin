# combine-assets-plugin

Webpack plugin to simple merge or exclude output assets.

## Using

```js
{
    entry: {
        vendorData: ['./vendor.js'],
        index: ['./src/index.js']
    },
}
new CombineAssetsPlugin({
    toConcat: {
        'index.js': ['vendor.js', 'index.js']
    },
    toExclude: [
        'vendorData.js'
    ]
})
```

## Options

### toConcat

Object where keys are target asset name and values are array of assets to merge.

### toExclude

List of assets to exclude.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
