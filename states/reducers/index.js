import { combineReducers } from "redux";
import siteSettings from "./siteSettings";
import contactUs from "./contactUs";
import newsletter from "./newsletter";
import signup from "./signup";
import signin from "./signin";
import forgetPassword from "./forgetPassword";
// import account from "./user/account";
// import checkout from "./checkout";
// import sellerAccount from "./seller/sellerAccount";
// import items from "./seller/items";
// import availability from "./availability";
// import subscriptions from "./seller/subscriptions";



export default combineReducers({
 siteSettings,
 contactUs,
 newsletter,
 signup,
 signin,
 forgetPassword,
//  account,
//  checkout,
//  sellerAccount,
//  items,
//  availability,
//  subscriptions,
 
 
 
});
