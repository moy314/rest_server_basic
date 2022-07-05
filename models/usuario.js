//SchemaTypes: aqui se agreagan las validaciones
/*
You can think of a Mongoose schema as the configuration object for a Mongoose model.
 A SchemaType is then a configuration object for an individual property. 
 A SchemaType says what type a given path should have, whether it has any getters/setters, 
 and what values are valid for that path

*/ 
const {model,Schema} = require('mongoose');

const userSchema = Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es requerido']

    },
    correo:{
        type:String,
        required:[true,'El correo es requerido'],
        unique:true

    },
    password:{

        type:String,
        required:[true,'La contraseña es requerida'],
    },
    imagen:{

        type:String,
    },
    rol:{

        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{

        type:Boolean,
        default:true
    },
    google:{

        type:Boolean,
        default:false
    },


})



module.exports = model('usuario',userSchema);