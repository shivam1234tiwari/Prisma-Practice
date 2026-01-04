import {PrismaClient} from "@prisma/client";

const prisma=new PrismaClient();

const main=async()=>{
    // insert data
// const user=await prisma.user.create({
//   data:{
//     name:"vinod",
//     email:"vinod@gmail.com",
//   },  
// })

// insert many data
const newuser=await prisma.user.createMany({
  data:[ 
    {
    name:"vinod",
    email:"vinod@gmail.com",
  },
  {
     name:"ajay kumar",
    email:"ajay12@gmail.com",
  },
  { name:"Amit singh",
    email:"amit23@gmail.com",}
  ]
})
console.log(newuser)

// Read the data
const users=await prisma.user.findMany();
console.log(users);


// find particuler id data
const puser=await prisma.user.findUnique({
    where :{id:2},
});
console.log(puser);

// Update the data
const updateuser=await prisma.user.update({
    where:{id:3},
    data:{name:"Ajay Kumar"},
})
console.log(updateuser)
};


main()
.catch((e)=>console.error(e))
.finally(async()=>{
    await prisma.$disconnect();
})
// prisma generate -> update the prisma client code s you can use the latest schema in