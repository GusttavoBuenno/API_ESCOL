'use strict'
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, { paranoid: true })     // usando paranoid, para que nenhum registo seja realmente deletado ficando no banco 
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.Pessoas, {
      foreignKey: 'estudante_id'
    })
    Matriculas.belongsTo(models.Turmas, {
      foreignKey: 'turma_id'
    })

  }
  return Matriculas
}