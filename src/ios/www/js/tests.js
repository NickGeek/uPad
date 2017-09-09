/** Init the example notepad */
function exampleNotepadTest() {
	var xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<notepad xsi:noNamespaceSchemaLocation="https://getmicropad.com/schema.xsd" title="Example Notepad" lastModified="2017-06-17T17:51:36.913+12:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><assets><asset uuid="75ab6f1a-bb5b-c31c-3285-e0af623aa8f3">data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtxyCH/H5Ddpawsy9S/AAAAAElFTkSuQmCC</asset><asset uuid="80c103f4-330e-1c1a-5660-9269bfd6ea09">data:image/jpeg;base64,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</asset><asset uuid="ae1e9385-282e-0430-b3b7-684c41fe1f13">data:image/png;base64,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</asset></assets><section title="Random Notes"><note title="Features" time="2016-11-10T16:13:04.000+13:00"><addons><import>asciimath</import></addons><bibliography><source id="1" item="image1">https://www.flickr.com/photos/othree/15576500626/</source></bibliography><markdown id="markdown1" x="10px" y="10px" height="auto" width="500px" fontSize="16px"><![CDATA[This is some text! I can format this text using (a slightly modified version of) *GitHub markdown!*

# Random Heading

> I like using [GitHub](https://github.com).

* Bullet lists are easy to create
* I can also do fancy mathy stuff!
	- ===2Mg + O_2 -> 2MgO===
	- ===a/sin (A) = b/sin(B) = c/sin(C)===
	- ===(-b +-sqrt(b^2-4ac))/(2a)===, easy as ===pi===!
	* As you can see math and science is easy with [AsciiMath](http://asciimath.org/). Just put three equal signs around your equation.

Oh! Tables work too:

|Cool Projects | Reason for Development|
|--|--|
|μPad| I had an exam I had to study for|]]></markdown><markdown id="markdown2" x="884px" y="21px" height="auto" width="210px" fontSize="16px">I like that you can place stuff **anywhere**


===A = cos^-1 ((b^2+c^2-a^2)/(2bc))===</markdown><drawing id="drawing1" x="342px" y="227px" width="auto" height="auto" ext="75ab6f1a-bb5b-c31c-3285-e0af623aa8f3">AS</drawing><image id="image1" x="757px" y="279px" height="160px" width="240px" ext="80c103f4-330e-1c1a-5660-9269bfd6ea09">AS</image></note><note title="Credits" time="2016-11-10T16:13:04.000+13:00"><addons/><bibliography><source id="1" item="markdown1">https://github.com/NickGeek/uPad/graphs/contributors</source></bibliography><markdown id="markdown1" x="10px" y="10px" height="" width="500px" fontSize="30px">[Me](https://nick.geek.nz). Just a silly idea that could work.</markdown></note></section><section title="More advanced layouts"><section title="Section magic"><section title="Sectionception"><note title="Cool isn't it?!" time="2016-11-10T16:13:04.000+13:00"><addons/><bibliography/><markdown id="markdown1" x="147px" y="130px" width="218.8125px" height="135.6875px" fontSize="16px"># Yup 😄</markdown></note></section></section><note title="Drawing" time="2016-11-10T16:13:04.000+13:00"><addons/><bibliography/><markdown id="markdown1" x="10px" y="10px" height="auto" width="500px" fontSize="16px"><![CDATA[I can draw over this text.
Drawing is up to the application to implement. It should simply be placed as an image with a transparent background. It is **100%** okay to place images over text.

Even though drawings are displayed as images they aren't edited like them. Use a &lt;drawing> tag for images so editors can tell the difference.]]></markdown><drawing id="drawing1" x="394px" y="131px" width="auto" height="auto" ext="ae1e9385-282e-0430-b3b7-684c41fe1f13">AS</drawing></note></section></notepad>`;
	parser.parse(xml, ["asciimath"]);
	parser.parseAssets(xml, a => {
		if (!a.assets) return;
		notepadAssets = new Set();
		for (var i = 0; i < a.assets.length; i++) {
			if (!notepadAssets.has(a.assets[i].uuid)) notepadAssets.add(a.assets[i].uuid);
			assetStorage.setItem(a.assets[i].uuid, a.assets[i].data);
		}

		while (!parser.notepad) if (parser.notepad) break;
		notepad = parser.notepad;
		notepad.notepadAssets = notepadAssets;

		saveNotepad(() => {
			updateNotepadList();
			initNotepad();
		});
	});
}