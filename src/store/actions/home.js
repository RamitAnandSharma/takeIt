import {FETCH_ORDERS} from './actionTypes';
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
  export const fetchOrders = () => ({
    type: FETCH_ORDERS,
    payload: [
      {
        orderId:'01',
        title:'Native Base',
        deliverDate:'26/12/2018 16:00',
        deliverStatus:'Success',
        description:'NativeBase is a free and open source framework that enable developers to build',
        orderStatus:'Success',
        orderDate:'26/12/2018',
        amount:'Rs 500',
    },
    {
      orderId:'02',
      title:'Native Base',
      deliverDate:'26/12/2018 16:00',
      deliverStatus:'Success',
      description:'NativeBase is a free and open source framework that enable developers to build',
      orderStatus:'Success',
      orderDate:'26/12/2018',
      amount:'Rs 1200',
    },
      {
        orderId:'03',
        title:'Native Base',
        deliverDate:'26/12/2018 16:00',
        deliverStatus:'Success',
        description:'NativeBase is a free and open source framework that enable developers to build',
        orderStatus:'Success',
        orderDate:'26/12/2018',
        amount:'Rs 100',
    },
    {
      orderId:'04',
      title:'Native Base',
      deliverDate:'26/12/2018 16:00',
      deliverStatus:'Success',
      description:'NativeBase is a free and open source framework that enable developers to build',
      orderStatus:'Success',
      orderDate:'26/12/2018',
      amount:'Rs 200',
    }
  ],
  })
