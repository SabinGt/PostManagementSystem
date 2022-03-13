module.exports = (sequelize, DataTypes) => {
    
    const Posts = sequelize.define("Posts",{
        title:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        postText:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        createdAt:{
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    })
    Posts.associate = (models) =>{
        Posts.hasMany(models.Comments,{
            onDelete:"cascade",
        });
    };
    
    return Posts; 
};