function typeButton(type){
  document.querySelector('.listings-container').innerHTML = "";
  if(type == "blues"){
    let HTML = `<div class="listing">
			            <div class="listing-image">
					          <img src="public/cyan.jpg">
			            </div>
			            <div class="listing-headline">
					          <p>Cyan</p>
			            </div>
			          </div>
                <div class="listing">
			            <div class="listing-image">
					          <img src="public/teal.jpg">
			            </div>
			            <div class="listing-headline">
					          <p>Teal</p>
			            </div>
			          </div>`;
    document.querySelector('.listings-container').insertAdjacentHTML('beforeend', HTML);
  }else if(type == "reds"){
    let HTML = `<div class="listing">
			            <div class="listing-image">
			              <img src="public/maroon.jpg">
			            </div>
			            <div class="listing-headline">
					          <p>Maroon</p>
			            </div>
			          </div>`;
    document.querySelector('.listings-container').insertAdjacentHTML('beforeend', HTML);
  }else{
    console.log("type not defined!");
  }
}
