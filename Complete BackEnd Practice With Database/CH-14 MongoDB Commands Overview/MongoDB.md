## MONGODB COMMAND OVERVIEW

#### Database Show Command
- show dbs or show databases

#### Database Delete Command
- db.database_name.drop()
#### Database Collections Command
- show collections

#### Database CreateCollections Command
- db.createCollections("Students")
- db.createCollections("Library")
- db.createCollections("StudentsFee")
- db.createCollections("StudentsResult")

#### Database CreateCollections Rename Command

- db.collection_name.renameCollections("Students")
- db.collection_name.renameCollections("StudentsFees")

#### Database InsertData Command
- db.collection_name.inserOne({"fname":"Anwar","lname":"Saeed","city":"Peshawar",})


#### Database Display CollectionsData Command
- db.collections_name.find().pretty()
- db.Students.find().pretty()
- db.Students.findOne({_id:ObjectId('id')})

#### Database Delete CollectionsData Command
- db.collection_name.deleteOne({_id:ObjectId("id")})
- For example
 - db.Students.deleteOne
({_id:ObjectId("67921f9e8b97315328281c4c")})

#### Database Update CollectionsData Command

- db.collection_name.updateOne({_id:ObjectId("id")},{$set:{}})
- For example
 - db.Students.updateOne
({_id:ObjectId("67921f9e8b97315328281c4c")},{$set:{"fname":"Areeb","city":"Lahore"}})
