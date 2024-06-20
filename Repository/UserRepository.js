import BaseRepository from "./BaseRepository.js";

// Creating my repository as a sun of BaseRepository
class UserRepository extends BaseRepository {
  async getAll() {
    try {
      const result = await super.getAll("users", [
        "id",
        "name",
        "surname",
        "email",
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById(
        "users",
        ["id", "name", "surname", "email"],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(valuesArray) {
    try {
      await super.insertOne("users", ["name", "surname", "email"], valuesArray);
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id) {
    try {
      super.deleteById("users", id);
    } catch (erro) {
      throw erro;
    }
  }

  async updateById(column, newValue, id) {
    try {
      super.updateById("users", column, newValue, id);
    } catch (erro) {
      throw erro;
    }
  }
}

export default UserRepository;
