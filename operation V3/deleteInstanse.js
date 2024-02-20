import {RDSClient , DeleteDBInstanceCommand} from '@aws-sdk/client-rds'

const client = new RDSClient()

const params = {
    DBInstanceIdentifier : 'ritisdb' , 
    DeleteAutomatedBackups : true , 
    FinalDBSnapshotIdentifier : 'ritisdb-final-snapshot' , 
    SkipFinalSnapshot : false
}


const deleteInstance = async ()=>{
    try{
        const data = await client.send(new DeleteDBInstanceCommand(params))
        console.log(data)

    }
    catch(err){
        console.log(err)
    }

   

}
  
deleteInstance()