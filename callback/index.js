
function getUser() {
  return new Promise(function (resolve, reject) {
      return resolve({ id: 1, name: 'Mosh' });
  });
}

function getUserTelephone(userId) {
  return new Promise(function (resolve, reject) {
      return resolve(['telephone']);
  });
}


function getUserAddress(userId) {
  return new Promise(function (resolve, reject) {
      return resolve({ address: 'Rua X, 123' });
  })
}

setInterval(() => {
  main()
}, 2000)
main()
async function main() {
  try {
    console.time('Promise')
    const user = await getUser();
    // const phone = await getUserTelephone();
    // const address = await getUserAddress();

    const result = await Promise.all([
      getUserTelephone(),
      getUserAddress()
    ])

    // result[0] = null

    console.log(
      `
      ${user.name}
      ${result[0]}
      ${result[1].address}
      `
    )

    console.timeEnd('Promise')
  } catch (error) {
    console.log('DEU RUIM: ', error)
  }
}







// getUser(function resolveUser(error, user) {
//   if (error) {
//     console.log('deu ruim no user: ', error);
//     return;
//   }

//   getUserTelephone(user.id, function resolveUserTelephone(error1, telephone) {
//     if (error1) {
//       console.log('deu ruim no telefone: ', error1);
//       return;
//     }

//     getUserAddress(user.id, function resolveUserAddress(error2, address) {
//       if (error2) {
//         console.log('deu ruim no endereço: ', error2);
//         return;
//       }

//       console.log('user: ', user.name);
//       console.log('telephone: ', telephone.telephone);
//       console.log('address: ', address.address);
//     });
//   });
// })


// const resolvedUser = getUser()

// // console.log('resolved user: ', resolvedUser)

// resolvedUser
//   .then(function (result) {
//     console.log('name: ', result.name)
//     return getUserTelephone()
//   })
//   .then(function (result) {
//     console.log('telephone: ', result.telephone)
//     return getUserAddress()
//   })
//   .then(function (result) {
//     console.log('address: ', result.address)
//   })
//   .catch(function (error) {
//     console.log('DEU RUIM: ', error)
//   })
