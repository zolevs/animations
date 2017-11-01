function upload(ref){
	ref.classList.add('uploading');
	ref.onclick=null;
	setTimeout(function(){
		ref.classList.remove('uploading');
		ref.classList.add('uploaded');
		ref.innerHTML = "&#10004";
	},4500);
}
