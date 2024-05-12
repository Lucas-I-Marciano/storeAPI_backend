import BaseRepository from "./BaseRepository.js";

// Creating my repository as a sun of BaseRepository
class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      const result = await super.getAll("products", [
        "id",
        "name",
        "size",
        "price_in_cents",
      ]);
      return result;
    } catch (erro) {
      throw erro;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById(
        "products",
        ["id", "name", "size", "price_in_cents"],
        id
      );
      return result;
    } catch (erro) {
      throw erro;
    }
  }
}

export default ProductRepository;
