module.exports = (sequelize, DataTypes) => {
  const FileInfo = sequelize.define('FileInfo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    // freezeTableName: true,
    paranoid: true,
  }
  );
  
  return FileInfo;
};