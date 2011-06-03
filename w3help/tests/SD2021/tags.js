	var tags = [
		'A',
		'AREA',
		'ABBR',
		'ACRONYM',
		'ADDRESS',
		'B',
		'BDO',
		'BIG',
		'BLOCKQUOTE',
		'BR',
		'BUTTON',
		'CAPTION',
		'CENTER',
		'CITE',
		'CODE',
		'COL',
		'COLGROUP',
		'DD',
		'DEL',
		'DIR',
		'DIV',
		'DFN',
		'DL',
		'DT',
		'EM',
		'FIELDSET',
		'FONT',
		'FORM',
		'H1',
		'H2',
		'H3',
		'H4',
		'H5',
		'H6',
		'HR',
		'I',
		'IMG',
		'INPUT',
		'INS',
		'IFRAME',
		'KBD',
		'LABEL',
		'LEGEND',
		'LI',
		'MAP',
		'MENU',
		'OBJECT',
		'OL',
		'EMBED',
		'P',
		'PRE',
		'Q',
		'S',
		'SAMP',
		'SELECT',
		'SMALL',
		'SPAN',
		'STRIKE',
		'STRONG',
		'SUB',
		'SUP',
		'TABLE',
		'TBODY',
		'TD',
		'TEXTAREA',
		'TFOOT',
		'TH',
		'THEAD',
		'TR',
		'TT',
		'U',
		'UL',
		'VAR'
	] ;
	var htmls = [
		'<a myID="tmp" href="javascript:void 0;">A</a>',
		'<img src="google.gif" usemap="#planetmap" /><map name="planetmap" myID="planetmap"><area myID="tmp" shape="rect" coords="0,0,50,50" href ="javascript:void 0;" style="display:inline;" /></map>',
		'<abbr myID="tmp">ABBR</abbr>',
		'<acronym myID="tmp">ACRONYM</acronym>',
		'<address myID="tmp">ADDRESS</address>',
		'<b myID="tmp">B</b>',
		'<bdo myID="tmp">BDO</bdo>',
		'<big myID="tmp">BIG</big>',
		'<blockquote myID="tmp">BLOCKQUOTE</blockquote>',
		'<br myID="tmp" />',
		'<button myID="tmp">BUTTON</button>',
		'<table><caption myID="tmp">CAPTION</caption><tr><td></td></tr></table>',
		'<center myID="tmp">CENTER</center>',
		'<cite myID="tmp">CITE</cite>',
		'<code myID="tmp">CODE</code>',
		'<table><col myID="tmp" /><tr><td>COL</td></tr></table>',
		'<table><colgroup myID="tmp"></colgroup><tr><td>COLGROUP</td></tr></table>',
		'<dd myID="tmp">DD</dd>',
		'<del myID="tmp">DEL</del>',
		'<dir myID="tmp">DIR</dir>',
		'<div myID="tmp">DIV</div>',
		'<dfn myID="tmp">DFN</dfn>',
		'<dl myID="tmp">DL</dl>',
		'<dt myID="tmp">DT</dt>',
		'<em myID="tmp">EM</em>',
		'<fieldset myID="tmp">FIELDSET</fieldset>',
		'<font myID="tmp">FONT</font>',
		'<form myID="tmp">FORM</form>',
		'<h1 myID="tmp">H1</h1>',
		'<h2 myID="tmp">H2</h2>',
		'<h3 myID="tmp">H3</h3>',
		'<h4 myID="tmp">H4</h4>',
		'<h5 myID="tmp">H5</h5>',
		'<h6 myID="tmp">H6</h6>',
		'<hr myID="tmp" />',
		'<i myID="tmp">I</i>',
		'<img myID="tmp" src="google.gif" />',
		'<input myID="tmp" type="text" />',
		'<ins myID="tmp">INS</ins>',
		'<iframe myID="tmp" src="google.html"></iframe>',
		'<kbd myID="tmp">KBD</kbd>',
		'<label myID="tmp" for="text">LABEL</label><input type="text" id="text" />',
		'<fieldset><legend myID="tmp">LEGEND</legend></fieldset>',
		'<li myID="tmp">LI</li>',
		'<img src="google.gif" usemap="#tmp" /><map myID="tmp" name="tmp"><area shape="rect" coords="0,0,20,20" href ="google.html" /></map>',
		'<menu myID="tmp">MENU</menu>',
		'<object myID="tmp" type="application/x-shockwave-flash" data="google.gif"><param name="movie" value="google.gif" /></object>',
		'<ol myID="tmp">OL</ol>',
		'<embed myID="tmp" type="application/x-shockwave-flash" src="clock.swf" />',
		'<p myID="tmp">P</p>',
		'<pre myID="tmp">PRE</pre>',
		'<q myID="tmp">Q</q>',
		'<s myID="tmp">S</s>',
		'<samp myID="tmp">SAMP</samp>',
		'<select myID="tmp"><option>SELECT</option></select>',
		'<small myID="tmp">SMALL</small>',
		'<span myID="tmp">SPAN</span>',
		'<strike myID="tmp">STRIKE</strike>',
		'<strong myID="tmp">STRONG</strong>',
		'<sub myID="tmp">SUB</sub>',
		'<sup myID="tmp">SUP</sup>',
		'<table myID="tmp"><tbody><tr><td>TABLE</td></tr></tbody></table>',
		'<table><tbody myID="tmp"><tr><td>TBODY</td></tr></tbody></table>',
		'<table><tbody><tr><td myID="tmp">TD</td></tr></tbody></table>',
		'<textarea myID="tmp">TEXTAREA</textarea>',
		'<table><tfoot myID="tmp"><tr><td>TFOOT</td></tr></tfoot></table>',
		'<table><tbody><tr><th myID="tmp">TH</th></tr></tbody></table>',
		'<table><thead myID="tmp"><tr><td>THEAD</td></tr></thead></table>',
		'<table><tbody><tr myID="tmp"><td>TR</td></tr></tbody></table>',
		'<tt myID="tmp">TT</tt>',
		'<u myID="tmp">U</u>',
		'<ul myID="tmp">UL</ul>',
		'<var myID="tmp">VAR</var>'
	];

	[].indexOf || (Array.prototype.indexOf = function(v) {
		for ( var i = this.length; i-- && this[i] !== v; );
		return i;
	});
	
	function $(id) {
		return document.getElementById(id);
	}
	
	function whiteBR(count) {
		for (var i = 0; i < count; i++) {
			document.write('<br />');
		}
	}
	
	function resetScroll(obj) {
		obj.scrollTop = 0;
	}
	
	function isScrolled(obj) {
		return obj.scrollTop;
	}
	
	function elLinkFocus(el, id) {
		return '<a href="javascript:void 0;" onclick="$(\'' + id + '\').focus();">' + el + '</a>';
	}