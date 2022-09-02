module.exports=(sequelize,Datatype)=>{
    const Suggestions=sequelize.define("Suggestions",{
        name_Suggestions:{
            type:Datatype.STRING,
            allowNull:false
        },
        duration: {
            type:Datatype.STRING,
            allowNull:false
        },
        img: {
            type:Datatype.STRING,
            allowNull:false
        },
        date: {
            type:Datatype.STRING,
            allowNull:false
        },
    })
    Suggestions.associate=models=>{
        Suggestions.hasMany(models.Ingredient,{
            onDelete:"cascade"
        })
    }
    return Suggestions
}