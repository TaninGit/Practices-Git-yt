// 1. extract location id
const room = {building:{
    id:'LX1001',
    name:'ActiveLab',
    location:{
        id:'North1',
        street:'Prachauthid'
    }
}
}

const {building:{location:{id}}} = room
console.log(id) //North1

// 2.extract notifications
// 3.extract main home and main work
const userProfile = {
    name: 'John Doe',
    contact: {
      email: 'johndoe@example.com',
      phone: {
        home: '123-456',
        work: '987-654'
      }
    },
    preferences: {
      theme: 'dark',
      notifications: {
        email: true,
        sms: false
      }
    }
  }

  const {preferences:{notifications}} = userProfile
  console.log(notifications) //{email: true, sms: false}

  const {contact:{phone:{home:mainHome}}} = userProfile
  const {contact:{phone:{home:mainWork}}} = userProfile
  console.log(`main home : ${mainHome} , main work : ${mainWork}`) //main home : 123-456 , main work : 123-456

  