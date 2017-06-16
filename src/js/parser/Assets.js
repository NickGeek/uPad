const xml2js = require('xml2js');
const parseString = require('xml2js').parseString;

exports.Assets = function() {
	this.assets = [];
}

exports.Assets.prototype.addAsset = function(asset) {
	this.assets.push(asset);
}

exports.Assets.prototype.getXMLObject = function(callback) {
	var parsedAssets = {asset: []};
	for (let i = 0; i < this.assets.length; i++) {
		this.assets[i].getXMLObject(obj => {
			parsedAssets.asset.push(obj);
			if (parsedAssets.asset.length === this.assets.length) callback(parsedAssets);
		});
	}
}

exports.Asset = function(dataAsBlob, uuid) {
	if (uuid) {
		this.uuid = uuid;
	}
	else {
		this.uuid = generateGuid();
	}

	this.data = dataAsBlob;
}

exports.Asset.prototype.toString = function(callback) {
	blobToDataURL(this.data, b64 => {
		callback(b64);
	});
}

exports.Asset.prototype.getXMLObject = function(callback) {
	this.toString(b64 => {
		callback({
			_: b64,
			$: {
				uuid: this.uuid
			}
		});
	});
}

exports.parse = function(xml, callback) {
	parseString(xml, {trim: true}, (e, res) => {
		var assets = new exports.Assets();
		if (e) {
			callback(assets);
			return;
		}

		var assetsXML = res.notepad.assets[0];
		if (!assetsXML || !assetsXML.asset) {
			callback(assets);
			return;
		}

		for (var i = 0; i < assetsXML.asset.length; i++) {
			var assetXML = assetsXML.asset[i];

			var asset = new exports.Asset(dataURItoBlob(assetXML._));
			asset.uuid = assetXML.$.uuid;
			assets.addAsset(asset);
		}
		callback(assets);
	});
}

//Thanks to https://stackoverflow.com/a/105074
function generateGuid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}

//Thanks to http://stackoverflow.com/a/12300351/998467
function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	var byteString = atob(dataURI.split(',')[1]);

	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// write the bytes of the string to an ArrayBuffer
	var ab = new ArrayBuffer(byteString.length);
	var ia = new Uint8Array(ab);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// write the ArrayBuffer to a blob, and you're done
	var blob = new Blob([ab], { type: mimeString });
	return blob;
}

function blobToDataURL(blob, callback) {
	var a = new FileReader();
	a.onload = function(e) { callback(e.target.result); }
	a.readAsDataURL(blob);
}
