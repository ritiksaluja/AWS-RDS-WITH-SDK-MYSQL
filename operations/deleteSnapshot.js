import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-south-1' });

const rds = new AWS.RDS()


const params = {
    DBSnapshotIdentifier : 'ritisdb-final-snapshot'
}

rds.deleteDBSnapshot(params , (err , data)=>{
    
    err ? console.log(err) : console.log(data)
})

