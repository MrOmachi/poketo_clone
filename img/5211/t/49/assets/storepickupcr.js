var excluded = false;
var notExcluded = false;
var giftCard = false;
var cr = 0
$('.critem').each(function(){
  var itemCollections = $(this).data('collections');
  var itemTitle = $(this).data('title');
  if (itemTitle === 'Pickup Instore') return;
  cr++;
  if (itemTitle.indexOf('Online Gift Card') > -1) giftCard = true;
    
  console.log({itemTitle})  
  console.log('-->', itemCollections)
  if (!storePickupSettings.exclude_collections) return;
  
  var found = false;
  for (var i = 0; i < storePickupSettings.exclude_collections.length; i++) {
  	var excl = storePickupSettings.exclude_collections[i].title;
    if (itemCollections.indexOf(excl) > -1) {
        found = true
    } 
  }
  
  for (var i = 0; i < storePickupSettings.exclude_products.length; i++) {
  	var excl = storePickupSettings.exclude_products[i].title;

    if (itemTitle.indexOf(excl) > -1) {
        found = true
    } 
  }
  
  if (found === true) {
  	excluded = true
  } else {
  	notExcluded = true;
  }
})
console.log({excluded, notExcluded})
if (excluded === false && notExcluded === true && giftCard && cr > 1) {
  var skipExcludedCheck = true;
}