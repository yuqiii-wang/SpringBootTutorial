import axios from 'axios';
const BASE_BACKEND_URL = 'https://jsonplaceholder.typicode.com'
const BASE_LOCALHOST_URL = 'http://localhost:8081'

export default {
  getAllPhotos: () => 
    axios.get(`${BASE_BACKEND_URL}/photos`),
  addPhoto: (photo) => 
    axios.post(`${BASE_BACKEND_URL}/photos`, photo),
  editPhoto: (photoId) =>
    axios.get(`${BASE_BACKEND_URL}/photos/${photoId}`),
  updatePhoto: (photo) =>
    axios.put(`${BASE_BACKEND_URL}/photos/${photo.id}`, photo),
  deletePhoto: (photoId) =>
    axios.delete(`${BASE_BACKEND_URL}/photos/${photoId}`),

  getFakecompanyProducts: () =>
    axios.get(`${BASE_LOCALHOST_URL}/product/all`),
}