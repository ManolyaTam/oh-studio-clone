/**
 * @typedef {Object} GalleryItem
 * @property {string} id
 * @property {string} company
 * @property {string} image
 * @property {string} icon
 * @property {string} [description]
 */

/**
 * @returns {Promise<GalleryItem[]>}
 */
export const fetchGalleryItems = async () => {
  return fetch("http://localhost:3001/api/gallery")
    .then(response => response.json())
    .then(data => {
      console.log("Fetched data:", data);
      return data.items;
    })
    .catch(error => {
      console.error("Error fetching gallery items:", error);
      return [];
    });
};