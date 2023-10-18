//Helper function for transactional inserts when it comes to the create character sheet
export const insertIntoDB = async (dbQuery, query, values) => {
    return await dbQuery(query, values);
  };
  
  module.exports = {
    insertIntoDB,
  };