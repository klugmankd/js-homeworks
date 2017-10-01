
var outerIn = `
<head>
	<title>My Title</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<main>
		<div class="container" id="container">
			<div class="row">
				<div class="col-xs-6">
					<a href="someurl.com" class="link-href" data-call="#popup">
						<figure>
							<img src="someimg.png" alt="some image">
							<figcaption>
								Caption <br> here!
							</figcaption>
						</figure>
					</a>
				</div>
				<div class="col-xs-6">
					<a href="someurl.com" class="link-href" data-call="#popup">
						<figure>
							<img src="someimg.png" alt="some image">
							<figcaption>
								Caption <br> here!
							</figcaption>
						</figure>
					</a>
				</div>
			</div>
		</div>
	</main>
</body>`;
var tagsRegEx = /head|\/head|title|\/title|link|div|\/div|figure|\/figure|figcaption|\/figcaption|img|body|main/g;
var changeBracketsOpen = outerIn.replace(/[<\/><]/gi, '<span class="white bracket-open">$&</span>');
var changeTags = changeBracketsOpen.replace(tagsRegEx, '<span class="red tag">$&</span>');
var changeClasses = changeTags.replace(/src|rel|alt|href|data-.*/gi, "<span class='green attr'>$&</span>");
var space = changeClasses.replace(/<span class="white bracket-open"><<\/span>/gi, "<br>$&");
document.getElementById('main').innerHTML = space;



