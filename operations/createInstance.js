import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-south-1' });

const RDS = new AWS.RDS();

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

RDS.createDBInstance(params, (err, data) => {
  if (err) {
    console.error("Error creating RDS instance:", err);
  } else {
    console.log("RDS instance created successfully:", data);
  }
});
