module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Rede", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            redeSocial: {
                type: DataTypes.STRING,
                AllowNull: true
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Redes'
        });
};
