module.exports=(sequelize,Datatype)=>{
    const Ingredient=sequelize.define("Ingredient",{
        name_Ingredient:{
            type:Datatype.STRING,
            allowNull:false
        },
        img_in: {
            type:Datatype.STRING,
            allowNull:false
        }
    })
    Ingredient.associate=models=>{
        Ingredient.belongsTo(models.Suggestions,{
            onDelete:"cascade"
        })
    }
    return Ingredient
}