import {RDSClient , CreateDBInstanceCommand} from '@aws-sdk/client-rds'

const client = new RDSClient()

const params = {
    DBName: 'ritisdb',
    DBInstanceIdentifier: 'ritisdb',
    AllocatedStorage: 5,
    DBInstanceClass: 'db.t3.micro',
    Engine: 'MySQL',
    MasterUsername: 'ritik', 
    MasterUserPassword: 'ritik12345',
    Port: 3306,
    EngineVersion: '8.0.35',
    PubliclyAccessible: true,
    StorageType: 'gp2'
  };


const createInstance = async ()=>{
    try{
        const data = await client.send(new CreateDBInstanceCommand(params))
        console.log(data)

    }
    catch(err){
        console.log(err)
    }

   

}
  
createInstance()