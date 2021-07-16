import * as mongoose from ' mongoose';

const ContactSchema=new mongoose.Schema({
    id:{type:Number , unique:true},
    contact_name:{type:String, required:true, default:''},
    contact_no:{type:Number , require:true , default:''},

})

export default mongoose.model('contact' , ContactSchema);
