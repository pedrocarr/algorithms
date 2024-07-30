const cropUrl = function(link) {
	if (!(link && link.length)) { return '' }
	const croppedUrl = `/${link.replace(/^(http(s)?:\/\/)?(\/\/)?(www\.)?([^/?#]+)(?:[/?#]|$)?/, '')}`
	if (croppedUrl[croppedUrl.length - 1] === '/') { return croppedUrl.substring(0, croppedUrl.length - 1) }
	console.log(croppedUrl)

  return croppedUrl
}



cropUrl('https://www.google.com') // '/google.com'

cropUrl('12345677') // '/google.com/about'
