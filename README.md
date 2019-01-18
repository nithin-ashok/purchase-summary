## How to run the project:

1. clone the project from my GitHub repo.
2. yarn install —ignore-engines
3. npm run start (to start application)
4. npm run test (to run the unit test cases). 


## Purchase Summary App:

> This is Purchase Summary user interface built using React & Redux

> As soon as Page get’s loaded, Purchase Summary app makes an api call to fetch the Purchase Order Summary and updates the redux state tree with the given data. As our <PurchaseSummary /> component subscribed for state changes through react redux, it renders with the updated state.

Here I have defined 2 Application State. 
  - Loading: The below is the screenshot the app while loading the data from the mocked backend api’s.
	![alt text] (https://github.com/nithin-ashok/purchase-summary/blob/master/src/assets/screenshots/LoadingPage.png)
	<img src="/src/assets/screenshots/LoadingPage.png"/>
  - Loaded: The below is the screenshot of the app after data loads and updates the redux state tree.
	![alt text] (https://github.com/nithin-ashok/purchase-summary/blob/master/src/assets/screenshots/LoadUp_Screen.png)
	<img src="/src/assets/screenshots/LoadUp_Screen.png"/>

In order to mock above states of the application and avoid the hardcoding the data, I have created mock services in the api folder of project, named src/api/getPurchaseSummary.js
   - fetchPurchaseSummary: Used to set the state with PurchaseSummary obtained through mock API
   - validatePromo: Used to validate the promo code entered against the valid promo code and to handle the associated errors.

   > fetchPurchaseSummary
   - PickUp Savings tooltip: 
     <img src="/src/assets/screenshots/PickUp_Saving_Tooltip.png"/>
   - SeeItemDetails Expander: 
     <img src="/src/assets/screenshots/SeeItemDetails_Expander.png"/>
   - ApplyPromoCode Expander: 
     <img src="/src/assets/screenshots/ApplyPromoCode_Expander.png"/>
   
   > validatePromo
   - Before ValidPromoCode:
     <img src="/src/assets/screenshots/Before_ValidPromoCode.png"/>
   - During ApplyPromoCode: 
     <img src="/src/assets/screenshots/During_ApplyPromoCode.png"/>
   - After ApplyValidPromoCode: 
     <img src="/src/assets/screenshots/After_ApplyValidPromoCode.png"/>
   - InvalidPromoCode: 
     <img src="/src/assets/screenshots/InvalidPromoCode.png"/>
   - PromoCodeAlreadyUsed: 
     <img src="/src/assets/screenshots/PromoCodeAlreadyUsed.png"/>
   - PromoCode Applying: 
     <img src="/src/assets/screenshots/PromoCode_Applying.png"/>


Components are broken down into smaller logical components in a reusable way.
   - Re-Usable Component : Expander Component
  
Other Components:
   -  Pricing Component — Responsible for presenting Item Pricing Modal
   -  Total Component — Shows Total Prices and also re renders as soon as we update total with promo code discount.
   -  PromoCode Component — This is connected component subscribes with promoCode slice of the redux state tree.
   -  ItemDetails Component —  Responsible for displaying item details in Expander component.


In this app, I have tried my best to give the better user experience and any feedbacks are welcome.