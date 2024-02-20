import {RDSClient , DeleteDBSnapshotCommand} from '@aws-sdk/client-rds'

const client = new RDSClient()

const params = {
    DBSnapshotIdentifier : 'ritisdb-final-snapshot'
}


const deleteSnapshot = async ()=>{
    try{
        const data = await client.send(new DeleteDBSnapshotCommand(params))
        console.log(data)

    }
    catch(err){
        console.log(err)
    }

   

}
  
deleteSnapshot()