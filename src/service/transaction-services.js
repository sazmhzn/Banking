import axios from "axios";

const BASE_URL = "http://localhost:4000/";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}users`).
    then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

// export const getUsersByID = (id) => {
//   return new Promise((resolve, reject) => {
//     axios.get(`${BASE_URL}/${id}`).then((response) => {
//       resolve(response.data);
//     }).catch((error) => {
//       reject(error);
//     });
//   });
// };


// export const deleteUser = (id) => {
//   return new Promise((resolve, reject) => {
//     axios.delete(`${BASE_URL}/${id}`)
//         .then(() => {
//           resolve(true);
//         }).catch((err) => {
//           reject(err);
//         })
//   });
// }

// export const updateUser = (id, user) => {
//   return new Promise((resolve, reject) => {
//     axios
//     .put(`${BASE_URL}/${id}`, user)
//     .then(() => {
//      resolve(true)
//     })
//     .catch((err) => {
//       reject(err);
//     });

//   });
// };

// export const searchByUsername = (username) => {
//   return new Promise((resolve, reject) => {
//     axios.get(`${BASE_URL}?username=${username}`)
//         .then((res) => {
//           resolve(res.data);
//         }).catch((err) => {
//           reject(err);
//         })
//   });
// }

export const getAllTransactions = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}transactions`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};
