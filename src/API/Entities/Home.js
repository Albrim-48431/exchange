import Request from '~/API/Request';

class Home {
  static async getRates(date, base) {
    let data = await Request.get(`/${date}?base=${base}`);
    return data;
  }
}
export default Home;
