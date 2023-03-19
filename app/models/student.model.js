module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    'student',
    {
      full_name: {
        type: Sequelize.STRING,
      },
      school_name: {
        type: Sequelize.STRING,
      },
      mobile_1: {
        type: Sequelize.STRING,
      },
      mobile_2: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      standard: {
        type: Sequelize.STRING,
      },
      division: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATE,
      },
      school_id: {
        type: Sequelize.STRING,
      },
      photo_name: {
        type: Sequelize.STRING,
      },
      blood_group: {
        type: Sequelize.STRING,
      },
    },
    {
      createdAt: false,

      updatedAt: false,
    },
  )

  return Student
}