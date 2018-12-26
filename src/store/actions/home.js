import {FETCH_HISTORY, DELETE_HISTORY} from './actionTypes';
import axios from 'axios';


// export const fetchHistory = () => {
//   console.log("fetchHistory action");
//
//   // axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then
//   // (function (response){
//   //   console.log(response);
//   // })
//   return  {
//     type: FETCH_HISTORY,
//     data: "Hi User Value Shown"
//   };
// };

export const profile = () => ({
    type: 'Data',
    data: "profile status is changed",
  })
