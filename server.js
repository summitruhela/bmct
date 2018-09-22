const express = require('express')
var app = express(), server = require('http').createServer(app);
const bodyParser = require('body-parser');
const database = require('./db_connections/mongodb');
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose')

let config = require('./config/config.dev');
cors = require("cors")
app.use(cors())
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
var RNCryptor = require('jscryptor');
var base64 = require('base-64');
var password = 'base64:OrC1q3MNTUtKJpFaHMBmU036W+x3o+/DvPdXZt9lOVY=';
//var password = 'dfsfsdfsdfsdfsdfsfsfd'
var utf8 = require('utf8');
const Utils = require('./lib/utils');
const Client = require('bitcoin-core');
const client = new Client({
  "username": "user1",
  "password": "pass1",
  "network": "testnet",
  "port": 16001,
  "host": "182.76.185.45"
});
var merchantListmodel = require('./dbSchema/merchantModel/merchantModel')
var merchantRoutes = require('./routes/merchantRoutes/merchantRoutes')
var adminPanel = require('./routes/adminRoutes/adminRoutes')
var userLocation = require('./dbSchema/adminModel/user')
var commonFunction = require('./commonFile/commonFunction')
var privacyAndPolicyModel = require('./dbSchema/merchantModel/privacyPolicy')
var termAndConditionModel = require('./dbSchema/merchantModel/term&condition')
app.use('/v1', merchantRoutes);
app.use('/v2', adminPanel);
app.use(express.static(path.join(__dirname, 'dist')));
statusMerchant = "qwertyuio"
console.log("%%%%%%%%%%%%%%%%%%%", statusMerchant)
var socketRef;
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
});
// setTimeout(function () { 
//   console.log("Hello");
//  }, 3000);


//!nsalkdflaskdjflkdasjflksajflksajdl
// new Promise((resolve, reject) => {
//   console.log(resolve,reject)
//   throw new Error('error')
// }).then(console.log)
// // app.get('*', (req, res) => {
// res.sendFile(__dirname + '/dist/index.html')
// });

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '..')
// });

/////////////////////////////////////socket //////////////////////////////////
var str = "Basic QXdFMFBaV00wb3lWbkZUOVRYUkhheFlOZHo1Ynh5WWJDMUM0ZnYrV2VGRXBvSGVUbSt4RUhpSjRhWlRRVjVhU0V5cXFQdExGWWZ3NklmWkZqdTJYZ1hFd2Z6cDA0MVp2V3M3V1lVak9rRmVFK0E9PTpBd0ZhMXptOEZOUlZac2FNbFU0cnZXQXFZMDJ5YVl1ZVh2eFhIdGNDNUU0K1lINVJFOUx1dEltMzdGelRzNEhxeUlaSUY1QXJaVFY3eGtHbC80cGtxeFhlMXhsNGRKcW1TNnpuS2NRL1Ayb3RCQT09";

function decrypt(data, callback) {
  if (!data) return callback(null, false)
  // !!console.log('data => ' + data)
  let str = data;
  var x = str.split(" ")[1]
  try {
    var decoded = base64.decode(x)
    var res = decoded.split(":");
    let finalResult1 = RNCryptor.Decrypt(res[0].toString(), password);
    let finalResult12 = RNCryptor.Decrypt(res[1].toString(), password);
    // console.log("&&&&&>>>>", finalResult)
    // !!console.log(" Get res of decodeed " + decoded)
    if (finalResult1 == "user" && finalResult12 == "pass") {
      // !!console.log(finalResult1 + finalResult12)
      return callback(null, true);
    }
  } catch (err) {
    return callback(null, false);
  }
}
/////////////////////////////encryptdata//////////////////////////////////////

function encryptData(data, callback) {
  // console.log("################data####################", data, typeof data.toString())
  var arg = data
  var result = RNCryptor.Encrypt(arg, password)
  // console.log("####################result################", result, typeof result)

  let tempResult = result.toString();
  return callback(null, tempResult)
}
function decryptDataTest(data, callback) {
  // console.log("############decryptDataTest########################", data, typeof data)
  try {
    console.log("decry")
    var result = RNCryptor.Decrypt(data, password)
    var tempResult = result
    // console.log("@#$@#@#@#@@@@@@@@RNCryptor.Decrypt(data, password)@@@@@@@@@@@@@@@@@@@@@@", tempResult.toString(), typeof tempResult)
    return callback(null, tempResult.toString())
  }
  catch (err) {
    console.log("$$$$$$$4",err)
    return callback(err)
  }
  //var result = RNCryptor.Decrypt(data, password)
  // var tempResult = result
  // if (false) {
  //   console.log("@#$@#@#@#@@@@@@@@RNCryptor.Decrypt(data, password)@@@@@@@@@@@@@@@@@@@@@@", tempResult.toString(), typeof tempResult)
  // }
  // console.log("&&&&&&&&&&&&&&&",typeof result,)
  // let tempResult = result;
  // console.log("finally-------------------->", tempResult)
  // let result1 = tempResult;
  // let arr = result1.split(/,/g);
  // console.log('Final array is=============>>>>>>.', arr);
  // return callback(null, tempResult.toString())
}
function decryptData(data, callback) {
  // data

  // console.log("data kept----->>>", data.Seed)
  // console.log("data keeep ------>>", data)

  arg = "AwGVsWriItQ+IwDJZTk0fajLVqsQknZgmLxRaY2qJNd/hwb/1fIW2K37w40zoWQJYOIeW92eAx91tFy0LrC40xLTFmEZSphEQ6+OcziBrydEX8EQ/vHHEow4Xk4aI9EBFRcbervIRREfwHyNaTMKkxqi4Krc9ebrM51KH/i/U857Ry/hj2Z3LO0FDzE4Hu8bZAKbfh5hQiEgcXyxocfnPbbwRfvxFoIrzxCKY+nQ6jh6V0WD5DdFNL8qWuV0hTMW6X9i4OZIa8fAd+uzDyLk+YDw"
  // var bytes = base64.decode(arg);
  // var text = utf8.decode(bytes);

  // var decoded = base64.decode(arg)
  // console.log("////////////////",decoded)  
  //   console.log("MEMNNEERERERERERERERERERE",arg)
  var result = RNCryptor.Decrypt(arg.toString(), password)
  // console.log("data result ---->>>", result)
  let tempResult = result.toString();
  return callback(null, tempResult)
}
//////////////api to get encrypt data/////////////////////////////////
app.post('/encrypt', (req, res) => {
  console.log("encryptdata")
  encryptData(req.body.value, (err, result) => {
    // console.log("err,result---------------------->>>>>>", err, result)
    if (err) res.json(err);
    else res.json(result);
  })
})
//////////////////////////decryptdata////////////////////////////////
app.post('/decrypt', (req, res) => {
  // console.log("decrypt")
  decryptDataTest(req.body.value, (err, result) => {
    // console.log("err,result---------------------->>>>>>", err, typeof result)
    if (err) res.json(err);
    else if(!result) {
      console.log("3####")
      res.json(result)
    }
    else {
      console.log("###########")
      res.json(result);}
  })

})
//api through socket
const listUnspent = async () => {
  try {
    let unspent = await client.listUnspent();
    return unspent;
  }
  catch (err) {
    //Failed to fetch unspent transactions.
    // console.log(err);
  }
};
list_txns = (cb) => {
  client.listTransactions().then((txns) => {
    //console.log("all txns are", txns);
    return cb(txns);
  }).catch((err) => {
    console.log("error is", err)
    return cb(null);
  })
};
// app.use(function(req, res, next){
//   res.io = io;
//   next();
// });
////////////////sockets//////////////////////////sockets////////////////////////////sockets///////////sockets////////////////////////////////////////////////////
var sockets = {};
io.use(function (socket, next) {
  // !!console.log("#########11111111#######1111111111111111", socket.handshake.headers.token)

  decrypt(socket.handshake.headers.token || str, (err, result) => {
    if (result == true) {
      console.log("true", result)
      next();
    }
    else {
      // !!console.log("false", false)
      next(new Error('Authentication failed'));
    }
  })
}).on('connection', (socket) => {
  console.log("connected with user")
  console.log('a user is connected', socket.id)

  sockets[socket.id] = {
    socket: socket
  };
  // console.log("****************sockets------------>", sockets)
  socketRef = socket;
  // decryptData("a", (err, result) => {
  //   if (result)
  //     console.log("connected with socket ")
  //   else {
  //     console.log("not connected with socket ")
  //   }
  // })


  ///////////////////////////////////////merchant list///////////////////////////////////////////////////////
  socket.on('merchantList', function () {
    // socket.on('save', () => {
    // console.log("merchantList")
    merchantListmodel.find({ isAdmin: "ACTIVE" }).select({ location: 1, email_ID: 1, fName: 1, lName: 1, logo: 1 }).lean().exec((err, result) => {

      if (err) {
        encryptData("500", (err, code) => {
          socket.emit('merchantList', { "to": sockets.id, 'code': code, "error": err })
        })
      }
      else if (result.length != 0) {
        // console.log("real ---->>result", result)
        encryptData(JSON.stringify(result), (err, encrypt) => {
          decryptDataTest(encrypt, (err, decrypt) => {
            // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", err, decrypt)
            // })
            if (err) {
              encryptData("500", (err, code) => {
                socket.emit('merchantList', { "to": sockets.id, 'code': code, "error": err })
              })
            }
            else {

              statusMerchant = "false"
              encryptData("200", (err, code) => {
                socket.emit('merchantList', { "to": sockets.id, 'code': code, "merchantList": encrypt })

              })

            }
          })
        })
      }
    })
  })
  /////////////////////////////////refresh/////////////////////////////////////////////////////////////////////
  // socket.on('refresh', () => {
  //   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  //   socket.emit("merchantList", { "to": socket.id })
  // })
  //////////////////////////////////////userinsert///////////////////////////////////////////////////////////
  socket.on("userInsert", function (data) {
    console.log("data is --->", data);
    decryptDataTest(data.location, (err1, coordinates) => {
      decryptDataTest(data.Seed, (err2, Seed) => {
        if (err1 || err2) {
          encryptData("500", (err, code) => {
            socket.emit('userInsert', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        console.log("coordinates--->>", coordinates)
        // console.log("coordinates", coordinates, typeof coordinates)
        // console.log(typeof data.location)
        userLocation.find({ seed: Seed }, (err, succ) => {
          if (err) {
            encryptData("500", (err, code) => {
              socket.emit('userInsert', { "to": sockets.id, 'code': code, "error": err })
            })
          }
          else if (succ.length < 1) {
            console.log("%%%%%%")
            var userLocationData = new userLocation({
              location: { coordinates: JSON.parse(coordinates), },
              seed: Seed
            })
            userLocationData.save((err, result) => {
              console.log("$$$$$$$$$$$$$$$$$", err, result)
              console.log("Error and save is===========>>>>>>>", result);
              if (err) {
                encryptData("500", (err, code) => {
                  socket.emit('userInsert', { "to": sockets.id, 'code': code, "error": err })
                })
              }
              else if (!result) {
                socket.emit('userInsert', { "to": sockets.id, 'code': 404 })
              }
              else {
                encryptData("200", (err, code) => {
                  var ar = [];
                  ar.push(result)
                  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%", ar)
                  userLocation.find({}, (err, result) => {
                    if (err) {

                      socket.emit('userInfo', { "to": sockets.id, 'code': "500", "error": err })
                    }
                    else if (!result) {
                      socket.emit('userInfo', { "to": sockets.id, 'code': "404" })
                    }
                    socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200", "result": result })
                  })
                  // socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200", "result": ar })
                  // socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200","result":result.location })
                })
              }
            })
          }
          else {
            userLocation.findOneAndUpdate({ seed: Seed }, { $set: { "location.coordinates": JSON.parse(coordinates) } }, { new: true }, (err, result) => {
              console.log("err,wwwresult", err, result)
              if (err) {
                encryptData("500", (err, code) => {
                  socket.emit('userInsert', { "to": sockets.id, 'code': code, "error": err })
                })
              }
              else if (!result) {
                socket.emit('userInsert', { "to": sockets.id, 'code': 404 })
              }
              else {
                encryptData("200", (err, code) => {
                  var ar = [];
                  ar.push(result)
                  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%", ar)
                  userLocation.find({}, (err, result) => {
                    if (err) {

                      socket.emit('userInfo', { "to": sockets.id, 'code': "500", "error": err })
                    }
                    else if (!result) {
                      socket.emit('userInfo', { "to": sockets.id, 'code': "404" })
                    }
                    socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200", "result": result })
                  })
                  // socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200", "result": ar })
                  // socket.broadcast.emit('userInfo', { "to": sockets.id, 'code': "200","result":result.location })
                })
              }
            })
          }
        })
        /* var userLocationData = new userLocation({
          location: { coordinates: JSON.parse(coordinates), },
          seed: Seed
        })
        userLocationData.save((err, result) => {
          console.log("$$$$$$$$$$$$$$$$$", err, result)
          console.log("Error and save is===========>>>>>>>", result);
          if (err) {
            encryptData("500", (err, code) => {
              socket.emit('userInsert', { "to": sockets.id, 'code': code, "error": err })
            })
          }
          else if (!result) {
            socket.emit('userInsert', { "to": sockets.id, 'code': 404 })
          }
          else {
            encryptData("200", (err, code) => {
              socket.emit('userInsert', { "to": sockets.id, 'code': code })
            })
          }
        }) */
      })
    })
  })
  /////////////////////////////////////////merchant profile/////////////////////////////////////////////////////////
  socket.on('merchantProfile', function (data) {
    console.log("###############sumit###########", data)
    decryptDataTest(data._id, (err, result) => {
      console.log("errrr", result.toString())
      // })
      merchantListmodel.findById({ _id: mongoose.Types.ObjectId(result) }, { fName: 1, lName: 1, location: 1, email_ID: 1, phoneNumber: 1, _id: 1, isAdmin: 1, logo: 1, merchantWebsite: 1 }, (err, result) => {
        // console.log("Error and save is===========>>>>>>>", result);
        if (err) {
          console.log("error")
          encryptData("500", (err, code) => {
            socket.emit('merchantProfile', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        else if (!result) {
          console.log("RESult not found")
          encryptData("401", (err, code) => {
            socket.emit('merchantProfile', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        else if (result) {
          console.log("real ---->>result", result)
          encryptData(JSON.stringify(result), (err, result) => {
            console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrR", err, result)
            if (err) {
              console.log(")))))))))))))))))))))))))))))))))))))))))))))))))))))))))))error")
              encryptData("500", (err, code) => {
                socket.emit('merchantProfile', { "to": sockets.id, 'code': code, "error": err })
              })
            }
            else {
              console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
              encryptData("200", (err, code) => {
                console.log(" encrypt result", result)
                socket.emit('merchantProfile', { "to": sockets.id, 'code': code, "result": result })
              })
            }
          })
        }
      })
    })
  })

  /////////////////////////////////////////generateAddress///////////////////////////////////////
  socket.on('generateAddress', function (data) {
    decryptDataTest(data.Seed, (err, result) => {
      console.log("data field--->>", result)
      //  var account = req.params.account;
      console.log("generate address============", result)
      var account1 = result;
      console.log("account1-------->", account1)
      client.getAccountAddress(account1, function (err, address) {
        if (err) {
          encryptData("500", (err, code) => {
            socket.emit('generateAddress', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        //   res.json({'code': 200, "address": address})
        else if (address) {
          console.log("real ---->>address", address)
          encryptData(address, (err, address) => {
            if (err) {
              encryptData("500", (err, code) => {
                socket.emit('generateAddress', { "to": sockets.id, 'code': code, "error": err })
              })
            }
            else {
              encryptData("200", (err, code) => {
                console.log(" encrypt address", address)
                socket.emit('generateAddress', { "to": sockets.id, 'code': code, "address": address })
              })
            }
          })
        }

      })
    })
  })
  //////////////////////////////////////////////////////generateNewAddress//////////////////////////////////
  socket.on('generateNewAddress', function (data) {
    //  var account = req.params.account;
    decryptDataTest(data.Seed, (err, result) => {
      console.log("address ============", data)
      var account1 = result;
      console.log("account1-------->", account1)
      client.getNewAddress(account1, function (err, address) {
        if (err) {
          encryptData("500", (err, code) => {
            socket.emit('generateNewAddress', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        else if (address) {
          console.log("real ---->> address", address)
          encryptData(JSON.stringify(address), (err, address) => {
            if (err) {
              encryptData("500", (err, code) => {
                socket.emit('generateNewAddress', { "to": sockets.id, 'code': code, "error": err })
              })
            }

            else {
              encryptData("200", (err, code) => {
                console.log(" encrypt address", address)
                socket.emit('generateNewAddress', { "to": sockets.id, 'code': code, "address": address })
              })
            }
          })
        }
      })
    })
  })
  //////////////////////////////////////////////////////list of addresss/////////////////////////////////////
  socket.on("listAddresses", (data) => {
    console.log("list of address", data)
    console.log("list of address api data---->>", data)
    decryptDataTest(data.Seed, (err, result) => {
      var account = result
      client.getAddressesByAccount(account, function (err, address) {
        if (err) {
          encryptData("500", (err, code) => {
            socket.emit('listAddresses', { "to": sockets.id, 'code': code, "error": err })
          })
        } else if (address) {
          console.log("real ---->>address", address)

          encryptData(JSON.stringify(address), (err, address) => {
            if (err) {
              socket.emit('listAddresses', { "to": sockets.id, 'code': code, "err": err })
            }
            else {
              decryptDataTest(address, (err, ans) => {
                console.log("$@$#$@#$@#$@#$@#$@#$@#$", ans)
                encryptData("200", (err, code) => {
                  console.log(" encrypt address", address)
                  socket.emit('listAddresses', { "to": sockets.id, 'code': code, "address": address })
                })
              })
            }
          })
        }
      })
    })
  })
  /////////////////////////////////////////////////Balance address//////////////////////////////////////////////////////
  socket.on("getBalanceAddress", (data) => {
    console.log("list of address", data)
    decryptDataTest(data.Seed, (err, result) => {
      listUnspent().then(unspent => {
        var unspentBalance = unspent.filter((unspent) => unspent.address == result);
        console.log("hhhhhhhhhhh", unspentBalance)
        var balance = 0;
        if (unspentBalance.length) {
          for (var transactions in unspentBalance) {
            balance += unspentBalance[transactions].amount;
          }
        }
        balance = Utils.round(balance, '8');
        console.log("Your balance of address : " + result + " is", balance);
        encryptData(JSON.stringify(balance), (err, balance) => {
          if (err) {
            encryptData("500", (err, code) => {
              socket.emit('getBalanceAddress', { "to": sockets.id, 'code': code, "error": err })
            })
          }
          else {
            encryptData("200", (err, code) => {
              console.log(" encrypt balance", balance)
              socket.emit('getBalanceAddress', { "to": sockets.id, 'code': code, "balance": balance })
            })
          }
        })
      })
    })
  })
  /////////////////////////////////////////////////GET ACCOUNT ADDRESS//////////////////////////////////////////////////////////
  socket.on("getAccountBalance", (data) => {
    console.log("list of address", data)
    decryptDataTest(data.Seed, (err, result) => {
      listUnspent().then(unspent => {
        var unspentBalance = unspent.filter((unspent) => unspent.account == result);
        console.log("hhhhhhhhhhh", unspentBalance)
        var balance = 0;
        if (unspentBalance.length) {
          for (var transactions in unspentBalance) {
            balance += unspentBalance[transactions].amount;
          }
        }
        balance = Utils.round(balance, '8');
        console.log("Your balance of address : " + result + " is", balance);
        encryptData(JSON.stringify(balance), (err, balance) => {
          if (err) {
            encryptData("500", (err, code) => {
              socket.emit('getAccountBalance', { "to": sockets.id, 'code': code, "error": err })
            })
          }
          else {
            encryptData("200", (err, code) => {
              console.log(" encrypt balance", balance)
              socket.emit('getAccountBalance', { "to": sockets.id, 'code': code, "balance": balance })
            })
          }
        })
      })
    })
  })
  ///////////////////////////account_to_address///////////////////////account_to_address///////////////////account_to_address///////
  socket.on("accountToAddress", (data) => {
    console.log("incoming data", data)  //account address  value 
    decryptDataTest(data.account, (err, account) => {
      decryptDataTest(data.address, (err, address) => {
        decryptDataTest(data.value, (err, value) => {
          client.sendFrom(account, address, parseInt(value), (err, result) => {
            console.log(err, result)
            if (err) {
              encryptData("500", (err, code) => {
                socket.emit('accountToAddress', { "to": sockets.id, 'code': code, "error": err })
              })
            }
            else {
              encryptData("200", (err, code) => {
                // console.log(" encrypt balance", code)
                encryptData(result, (err, result) => {
                  socket.emit('accountToAddress', { "to": sockets.id, 'code': code, "transactionHash": result })
                })
              })
            }

          })
        })
      })
    })
  })
  ///////////////////////////////////////////deposit history by account////////////////////////////////////
  socket.on("depositHistory", (data) => {
    console.log("deposit history")
    let deposits = [];
    decryptDataTest(data.account, (err, account) => {
      if (err) {
        encryptData("500", (err, code) => {
          socket.emit('depositHistory', { "to": sockets.id, 'code': code, "error": err })
        })
      }
      else {
        try {
          list_txns((txns) => {
            if (txns) {
              console.log("==>>", "account");
              txns.forEach((elem) => {
                //  if (elem.account === req.params.account && elem.category === "receive") {
                if (elem.account === account) {
                  deposits.push({

                    txid: elem.txid,
                    //timereceived: elem.timereceived,
                    amount: elem.amount,
                    confirmations: elem.confirmations,
                    address: elem.address
                  })
                }
              });
              console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$", deposits)
              encryptData("200", (err, code) => {
                // console.log(" encrypt balance", code)
                encryptData(JSON.stringify(deposits), (err, deposits) => {
                  socket.emit('accountToAddress', { "to": sockets.id, 'code': code, "deposits": deposits })
                })
              })

            }
          })
        }
        catch (err) {
          if (err) {
            encryptData("500", (err, code) => {
              socket.emit('depositHistory', { "to": sockets.id, 'code': code, "error": err })
            })
          }
        }
      }
    })
  })

  //////////////////////////////////////////////sent mailer opt //////////////////////////////////////////////////////////
  socket.on("sentOTP", (data) => {
    console.log("sentOTP", data)
    decryptDataTest(data.email, (err, email) => {
      console.log("############email###############email#########email#####################", err, email)
      var otp = commonFunction.getOTP()
      console.log("%########opt##############", otp)

      commonFunction.sendMail(email, "OTP", otp.toString(), (err, result) => {
        console.log("mail error", err, result)
        if (err) {
          encryptData("500", (err, code) => {
            socket.emit('sentOTP', { "to": sockets.id, 'code': code, "error": err })
          })
        }
        else if (!result) {
          console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
          encryptData("404", (err, code) => {
            socket.emit('sentOTP', { "to": sockets.id, 'code': code })
          })
        }
        else {
          console.log("shiva")
          encryptData(JSON.stringify(otp), (err, otp) => {
            console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
            encryptData("200", (err, code) => {
              socket.emit('sentOTP', { "to": sockets.id, 'code': code, "otp": otp })
            })
          })
        }
      })
    })
  })
  ///////////////////////////////////////////////get aboutus/////////////////////////////////////////////////
  socket.on("aboutUs", () => {
    privacyAndPolicyModel.findOne({}, { aboutUs: 1, _id: 0 }).exec((err, result) => {
      console.log(err, result)
      if (err) {
        encryptData("500", (err, code) => {
          socket.emit('aboutUs', { "to": sockets.id, 'code': code, "error": err })
        })
      }
      else if (!result) {
        // console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
        encryptData("404", (err, code) => {
          socket.emit('aboutUs', { "to": sockets.id, 'code': code })
        })
      }
      else {
        console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", result)
        encryptData(JSON.stringify(result), (err, result) => {

          encryptData("200", (err, code) => {
            socket.emit('aboutUs', { "to": sockets.id, 'code': code, "aboutUs": result })
          })
        })
      }
    })
  })
  ///////////////////////////////////privacy privacyAndPolicy///////////////////////////////////
  socket.on("privacyAndPolicy", () => {
    privacyAndPolicyModel.findOne({}, { policy: 1 }).exec((err, result) => {
      console.log(err, result)
      if (err) {
        encryptData("500", (err, code) => {
          socket.emit('privacyAndPolicy', { "to": sockets.id, 'code': code, "error": err })
        })
      }
      else if (!result) {
        // console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
        encryptData("404", (err, code) => {
          socket.emit('privacyAndPolicy', { "to": sockets.id, 'code': code })
        })
      }
      else {
        encryptData(JSON.stringify(result), (err, result) => {
          // console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
          encryptData("200", (err, code) => {
            socket.emit('privacyAndPolicy', { "to": sockets.id, 'code': code, "aboutUs": result })
          })
        })
      }
    })
  })
  ///////////////////////////////term and condition/////////////////////////////////////////////////
  socket.on("termAndCondition", () => {
    termAndConditionModel.findOne({}, { about: 1 }).exec((err, result) => {
      console.log(err, result)
      if (err) {
        encryptData("500", (err, code) => {
          socket.emit('termAndCondition', { "to": sockets.id, 'code': code, "error": err })
        })
      }
      else if (!result) {
        // console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
        encryptData("404", (err, code) => {
          socket.emit('termAndCondition', { "to": sockets.id, 'code': code })
        })
      }
      else {
        encryptData(JSON.stringify(result), (err, result) => {
          // console.log("#$@#$@#$@#$SADFGASDFFVASDFGASDFGAS@#$@#$@#$@#", otp)
          encryptData("200", (err, code) => {
            socket.emit('termAndCondition', { "to": sockets.id, 'code': code, "aboutUs": result })
          })
        })
      }
    })
  })
  //////////////////////////gauri emit ///////////////////////////////////////////////////////////////////

  socket.on("userInfo", () => {
    console.log("userDATA")
    userLocation.find({}, (err, result) => {
      if (err) {

        socket.emit('userInfo', { "to": sockets.id, 'code': "500", "error": err })
      }
      else if (!result) {
        socket.emit('userInfo', { "to": sockets.id, 'code': "404" })
      }
      else {
        socket.emit('userInfo', { "to": sockets.id, 'code': "200", "result": result })

      }
    })
  })
  socket.on('refreshedList', () => {
    console.log("######")
    if (true) {
      merchantListmodel.find({ isAdmin: "ACTIVE" }, { location: 1, email_ID: 1, fName: 1, lName: 1, logo: 1 }, (err1, res) => {
        // console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", res)
        if (err1)
          console.log('err')
        else {
          console.log("########gauri############################")
          encryptData(JSON.stringify(res), (err, result) => {
            encryptData("200", (err, code) => {
              // socket.emit('merchantList', { "to": sockets.id, 'code': code, "merchantList": encrypt })
              socket.broadcast.emit('merchantList', { "to": sockets.id, 'code': code, "merchantList": result })
            })
          })
        }
      })
    }
  })
  //////////////////////////////////////////////////////////////////////disconnected//////////////////////////////////////
  socket.on('disconnected', () => {
    console.log('user disconnected', socket.id)
  })

})

// function refreshList (list){
//   console.log("##########awfdyahfdredfef",list)
//   io.emit('refreshedList',list)
// }

// module.exports =  {
//   refreshList: ()=>{
//     console.log("fdehgdve")
//     this.refreshList();
//   }
// }



server.listen(config.server_port, () => {
  console.log(server.address(), config.server_port)
});
