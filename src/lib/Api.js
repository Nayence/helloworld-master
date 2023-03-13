import axios from "axios"

class Api {

  constructor() {
    this.baseUri = "http://localhost:3000"
  }

  async getPenseBete() {
    return await this.get("/penseBete");
  }
  async getConsommables() {
    return await this.get("/consommables");
  }
  async NewPenseBete(content, priority) {
    return await this.post("/penseBete", { content, priority});
  }
  async NewConsommable(content, type) {
    return await this.post("/consommables", {content, type});
  }
  async deleteConso(id) {
    return await this.delete("/consommables", {id});
  }
  async NewRDV(title, com, date){
    return await this.post("/rdv", {title, com, date})
  }
  async get(url) {
    return (await axios(`${this.baseUri}${url}`)).data;
  }
  async delete(url, id){
    await axios.delete(`${this.baseUri}${url}/{id}`);
  }
  async post(url, body) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return (await axios.post(`${this.baseUri}${url}`, body, headers));
  }

}

export const api = new Api();