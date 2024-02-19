import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-south-1' });

const rds = new AWS.RDS()

const params = {

    DBInstanceIdentifier : 'ritisdb'

}

rds.describeDBInstances(params , (err , data)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log(data)
   }
})
